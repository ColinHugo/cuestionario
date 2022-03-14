const dbValidators = require( './db-validators' );
const generarUrlFotos  = require( './generar-url-fotos' );
const generarJWT = require( './generar-jwt' );
const subirArchivo = require( './subir-archivo' );

module.exports = {
    ...dbValidators,
    ...generarUrlFotos,
    ...generarJWT,
    ...subirArchivo
}