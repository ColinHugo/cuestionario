const path = require( 'path' );

const { v4: uuidv4 } = require('uuid');

const subirArchivo = ( files, extensionesValidas = [ 'png', 'jpg', 'jpeg', 'tiff', 'psd', 'bmp' ], carpeta = '' ) => {

    return new Promise( ( resolve, reject ) => {

        const { archivo } = files;

        if ( archivo.size > 10485760 ) { 
            reject ( 'El archivo es muy pesado.' );
        }

        const nombreArchivo = archivo.name.split( '.' );
        const extension = nombreArchivo[ nombreArchivo.length - 1 ];
        
        if( !extensionesValidas.includes( extension ) ){
            reject( `La extensión ${ extension } no es permitida - ${ extensionesValidas }` );
        }

        const nombre = uuidv4() + '.' + extension;
        
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombre );

        archivo.mv( uploadPath, ( err ) => {

            if ( err ){ 

                console.error( 'Error al mover la imagen.', err );

                reject( 'Error al mover la imagen.' );
            }

            resolve( nombre );
        } );
    } );
}

module.exports = {
    subirArchivo
}