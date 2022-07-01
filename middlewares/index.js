const validaCampos  = require( './validar-campos' );
const validarFechas = require('./validar-fechas');
const validaJWT  = require( './validar-jwt' );

module.exports = {
    ...validaCampos,
    ...validarFechas,
    ...validaJWT
}