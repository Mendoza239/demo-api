const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const getConnection = require('./db/conexiondb');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.get('/', async (request,response, next) =>{
    try {
        const usuarios = await getConnection();
        const rta = await usuarios.query('SELECT * FROM public.usuarios');
        response.json(rta.rows)
    } catch (error) {
        next(error);
    }
});

//area de end point
app.get('/', (request,response) =>{
    response.json({info: 'la api esta online'})
});

//usuarios
app.get('/usuarios',usuarioService.getUsuarios,)

app.listen(port, () =>{
    console.log(`API corriendo en el puerto ${port}`);
});