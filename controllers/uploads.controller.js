const path = require( 'path' );
const fs = require( 'fs' );

const { Usuario } = require( '../models' );

const { subirArchivo } = require( '../helpers' );

const getImagen = async ( req, res ) => {

    const { idUsuario } = req.params;

    const usuario = await Usuario.findById( idUsuario );
    
    try {

        if ( usuario.foto ){
            
            const pathImagen = path.join( __dirname, '../uploads', 'usuarios', usuario.foto );

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

const postArchivo = async ( req, res ) => {

    try {

        const nombre = await subirArchivo( req.files, undefined, 'usuarios' )
            .catch( error => {
                return res.json( {
                    value: 0,
                    msg: error
                } );
            } );

        res.json( { nombre } );
    }

    catch( error ) {
        return console.error( 'Error al subir el archivo.', error );
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

        usuario.foto = await subirArchivo( req.files, undefined, 'usuarios' )
            .catch( error => {
                return res.json( {
                    value: 0,
                    msg: error
                } );
            } );

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
    getImagen,
    postArchivo,
    putImagen
}