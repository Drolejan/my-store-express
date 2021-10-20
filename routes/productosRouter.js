// traemos a express
const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get ("/", (req, res) => {
  const productos =[];
  const { size } = req.query;
  const limit=size || 10;
  for (let index = 0; index < limit; index++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(productos);
});

router.get('/filter', (req,res)=>{
  res.send('Soy un filter');
});//Lo especifico siempre antes de lo dinamico

router.get('/:id',(req,res)=>{
  const { id } = req.params;
  if(id==='999'){
    res.status(404).json({
      message:'not found'
    });
  }
  else{
  res.status(200).json({
    id,
    name: 'Juego 2',
    precio: 1500
  });
}
});

router.post('/',(req,res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
})

router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
    id,
  });
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    message: 'created',
    id,
  });
})

module.exports = router;
