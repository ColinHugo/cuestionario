const path = require( 'path' );
const fs = require( 'fs' );

const { Mensaje } = require( '../models' );

const { subirArchivo } = require( '../helpers' );

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

const putImagen = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        const usuario = await Usuario.findById( idUsuario );

        // Limpiar imágenes previas
        try {

            if ( usuario.foto ){
                // Hay que borrar la imagen del servidor
                const pathImagen = path.join( __dirname, '../uploads', 'usuarios', usuario.foto );

                if ( fs.existsSync( pathImagen ) ){
                    fs.unlinkSync( pathImagen );
                }
            }
        }

        catch ( error ){

            console.error( 'Error al borrar la imagen previa.', error );

            return res.json( {
                value: 0,
                msg:  'Error al borrar la imagen previa.'
            } );
        }

        usuario.foto = await subirArchivo( req.files, undefined, 'usuarios' );

        await usuario.save();

        return res.json( {
            value: 1,
            msg: 'Foto de perfil actualizada.'
        } );

    } catch ( error ) {
        return console.error( 'Error al actualizar la foto de perfil.' );
    }
}

module.exports = {
    getImagenMensaje,
    putImagen
}