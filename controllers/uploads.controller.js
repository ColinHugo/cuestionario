const path = require( 'path' );
const fs = require( 'fs' );

const { Mensaje } = require( '../models' );

const getImagenMensaje = async ( req, res ) => {

    const { idMensaje } = req.params;

    const mensaje = await Mensaje.findById( idMensaje );
    
    try {

        if ( mensaje.foto ){
            
            const pathImagen = path.join( __dirname, '../uploads/mensajes/', mensaje.foto );

            if ( fs.existsSync( pathImagen ) ){
                return res.sendFile( pathImagen );
            }
        }

        const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );

        return res.sendFile( pathImagen );
    }

    catch ( error ){

        console.error( 'Error al mostrar la imagen.', error );

        return res.json( {
            value: 0,
            msg: 'Error al mostrar la imagen.'
        } );
    }
}

module.exports = {
    getImagenMensaje,
}