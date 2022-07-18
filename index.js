const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const getConnection = require('./db/conexiondb').default;

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

//usuarios
app.get('/usuario',(request,response)=>{response.json({id:1,
    nombre:'Ismael',apellido:'Mendoza'});
  });

app.listen(port, () =>{
    console.log(`API corriendo en el puerto ${port}`);
});