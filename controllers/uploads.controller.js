const path = require( 'path' );
const fs = require( 'fs' );

const { Mensaje, Noticia, Prevencion, Usuario } = require( '../models' );

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

        console.error( 'Error al mostrar la imagen de mensajes.', error );

        return res.json( {
            value: 0,
            msg: 'Error al mostrar la imagen de mensajes.'
        } );
    }
}

const getImagenNoticia = async ( req, res ) => {

    const { idNoticia } = req.params;

    const noticia = await Noticia.findById( idNoticia );
    
    try {

        if ( noticia.foto ){
            
            const pathImagen = path.join( __dirname, '../uploads/noticias/', noticia.foto );

            if ( fs.existsSync( pathImagen ) ){
                return res.sendFile( pathImagen );
            }
        }

        const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );

        return res.sendFile( pathImagen );
    }

    catch ( error ){

        console.error( 'Error al mostrar la imagen de noticias.', error );

        return res.json( {
            value: 0,
            msg: 'Error al mostrar la imagen de noticias.'
        } );
    }
}

const getImagenPrevencion = async ( req, res ) => {

    const { idPrevencion } = req.params;

    const prevencion = await Prevencion.findById( idPrevencion );
    
    try {

        if ( prevencion.foto ){
            
            const pathImagen = path.join( __dirname, '../uploads/prevenciones/', prevencion.foto );

            if ( fs.existsSync( pathImagen ) ){
                return res.sendFile( pathImagen );
            }
        }

        const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );

        return res.sendFile( pathImagen );
    }

    catch ( error ){

        console.error( 'Error al mostrar la imagen de prevenciones.', error );

        return res.json( {
            value: 0,
            msg: 'Error al mostrar la imagen de prevenciones.'
        } );
    }
}

const getImagenUsuario = async ( req, res ) => {

    const { idUsuario } = req.params;

    const usuario = await Usuario.findById( idUsuario );
    
    try {

        if ( usuario.foto ){
            
            const pathImagen = path.join( __dirname, '../uploads/usuarios/', usuario.foto );

            if ( fs.existsSync( pathImagen ) ){
                return res.sendFile( pathImagen );
            }
        }

        const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );

        return res.sendFile( pathImagen );
    }

    catch ( error ){

        console.error( 'Error al mostrar la imagen de usuarios.', error );

        return res.json( {
            value: 0,
            msg: 'Error al mostrar la imagen de usuarios.'
        } );
    }
}

module.exports = {
    getImagenMensaje,
    getImagenNoticia,
    getImagenPrevencion,
    getImagenUsuario
}