console.log('My App');

// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("hola mi server en express");
});

app.get ("/nueva", (req, res) => {
  res.send("hola soy otra ruta nueva");
  });

app.get ("/productos", (req, res) => {
  res.json([
    {
    name: 'Juego 1',
    precio: 999
    },
    {
      name: 'Juego 2',
      precio: 1500
    }
  ]);
});

app.get('/productos/:id',(req,res)=>{
  const { id } = req.params;
  res.json({
    id,
    name: 'Juego 2',
    precio: 1500
  });
});

app.get('/categorias/:categoryId/productos/:productId',(req,res)=>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});


//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("mi port" + port);
});

