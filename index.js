const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

//area de end point
app.get('/', (request,response) =>{
    response.json({info: 'la api esta online'})
});

//usuarios
app.get('/usuario', (request, response)=>{
    response.json({id:1, nombre:'Ismael', apellidos:'Mendoza'});
})

app.listen(port, () =>{
    console.log(`API corriendo en el puerto ${port}`);
});