//Destructuracion de objetos 
const { request, response } = require('express');
const { pool } = require('../db/conexion');
const handle = require('../helpers/handlersErrors');

/*const getUsuarios = (request, response) => {
    console.log("@getUsuarios");
    try {      
        pool.query(GET_ALL_QUERY,(error, results) => {
                if (error) {
                    handle.callbackError(error, response);                    
                    return;
                }
                let usuarios = results.rows;                
                response.status(200).json(usuarios);
            });
    } catch (e) {
        handle.callbackErrorNoControlado(e, response);
    }
};*/

const getUsuarios = async(request, response) =>{
    try {
        const rta =await pool.query("SELECT * FROM si_usuario WHERE eliminado = false");
        response.json(rta.rows);
    } catch (e) {
        handle.callbackErrorNoControlado(e,response);
    }
}

const postUsuarios= async(request,response) =>{
    try {
        const results = await pool.query("insert into si_usuario (id, nombre, apellidos, correo, clave, fecha_genero, eliminado) values(default,'roberto', 'martinez', 'robert354@gmail.com','hsldah673ejg',default,default)");
        return results;
    } catch (e) {
        handle.callbackErrorNoControlado(e,response);
    }
}

const updateUsuarios = async(request,response)=>{
    try {
        const results = await pool.query("update si_usuario set apellidos = 'Menendez', eliminado = true");
    } catch (e) {
        handle.callbackErrorNoControlado(e,response);
    }
}


const deleteUsuarios = async(request,response)=>{
    try {
        
    } catch (e) {
        
    }
}

module.exports = {
    getUsuarios,
    postUsuarios,
    updateUsuarios
}