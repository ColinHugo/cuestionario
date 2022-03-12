const validaCampos  = require( './validar-campos' );
const validaJWT  = require( './validar-jwt' );

module.exports = {
    ...validaCampos,
    ...validaJWT
}