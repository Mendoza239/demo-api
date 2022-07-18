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

app.use((req, res, next) => {   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token'); // If needed 
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
});

//area de end point
/*app.get('/', (request,response) =>{
    response.json({info: 'la api esta online'})
});*/

//usuarios
app.get('/', usuarioService.getUsuarios);

app.listen(port, () =>{
    console.log(`API corriendo en el puerto ${port}`);
});