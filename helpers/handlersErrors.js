const callbackErrorNoControlado = (ex,response) => {
    console.log("excepcion no controlada" + ex);
    response.status(400).json({status:false,respuesta:false, mensajeRetorno:"excepcion no controlada"});
}

const callbackError =(mensaje, response) =>{
    console.log(mensaje);
    response.status(400).json({status:false, respuesta:false, mensajeRetorno: mensaje})
}

module.exports ={
    callbackErrorNoControlado,
    callbackError
}