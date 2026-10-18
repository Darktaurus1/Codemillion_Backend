// vamos a dejarles 2 de las 3 funciones para validar 
function validarCorreo(){
    if (typeof correo !== 'string') return false;
    
    return correo.includes('@') && correo.includes('.');
}

function validarBoleta(){
    //tarea
}

function validarContrasena(){
    if (typeof contrasena !== 'string') return false;
    return contrasena.length >= 8;
}

module.exports = {validarBoleta, validarContrasena, validarCorreo} = require()