const res = require('express/lib/response');
const path = require( 'path' );
const { v4: uuidv4 } = require('uuid');

const subirArchivo = ( files, extensionesValidas = [ 'png', 'jpg', 'jpeg', 'gif' ], carpeta = '' ) => {

    return new Promise( ( resolve, reject ) => {

        const { archivo } = files;

        const nombreArchivo = archivo.name.split( '.' );
        const extension = nombreArchivo[ nombreArchivo.length - 1 ];
        
        if( !extensionesValidas.includes( extension ) ){
            return reject( `La extensión ${ extension } no es permitida - ${ extensionesValidas }` );
        }

        const nombre = uuidv4() + '.' + extension;
        
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombre );

        archivo.mv( uploadPath, ( err ) => {

            if ( err ){ return reject( 'Error al mover la imagen.', err ); }

            resolve( nombre );
        } );
    } );
}

module.exports = {
    subirArchivo
}