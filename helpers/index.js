const dbValidators = require( './db-validators' );
const generarGraficas = require( './generar-graficas' );
const generarPDF = require( './generar-pdf' );
const generarUrlFotos  = require( './generar-url-fotos' );
const generarJWT = require( './generar-jwt' );
const subirArchivo = require( './subir-archivo' );

module.exports = {
    ...dbValidators,
    ...generarGraficas,
    ...generarUrlFotos,
    ...generarPDF,
    ...generarJWT,
    ...subirArchivo
}