const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');
const port = process.env.PORT || 5000;

const usuarioService = require('./services/usuario');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.use((req,res, next) =>{
    res.setHeader('Acess-Control-Allow-Origin','*');
    res.setHeader('Acess-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Acess-Control-Allow-Headers','X-Requested, Whith,content-type, x-acess-token');
    res.setHeader('Acess-Control-Allow-Credentials', true);
    next();
});

//area de end point
app.get('/', (request,response) =>{
    response.json({info: 'la api esta online'})
});

//usuarios
app.get('/usuario',usuarioService.getUsuarios,)

app.listen(port, () =>{
    console.log(`API corriendo en el puerto ${port}`);
});