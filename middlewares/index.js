const validaCampos  = require( './validar-campos' );
const validarImagen = require( './validar-archivo' );
const validaJWT  = require( './validar-jwt' );

module.exports = {
    ...validaCampos,
    ...validarImagen,
    ...validaJWT
}