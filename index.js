//console.log('My App');

// traemos a express
const express = require("express");
const cors = require('cors');
const routerApi = require("./routes");
//const faker = require("faker");

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://myapp.co','http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("hola mi server en express");
});

app.get ("/nueva", (req, res) => {
  res.send("hola soy otra ruta nueva");
  });

  routerApi(app);

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  //le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("mi port" + port);
});

