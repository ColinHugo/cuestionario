const fs = require( 'fs' );
const path = require( 'path' );

const { Usuario } = require( '../models' );

const { subirFoto } = require( '../helpers' );

const getUsuarios = async ( req, res ) => {

    try {

        const usuarios = await Usuario.find( { estado: true } );

        if ( usuarios.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay usuarios que mostrar.'
            } );
        }

        usuarios.forEach( usuario => {
            if ( usuario.foto ) {
                usuario.foto = `${ req.protocol }://${ req.headers.host }/usuarios/${ usuario.foto }`;
            }
        } );

        return res.json( {
            value: 1,
            usuarios
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener a los usuarios.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener a los usuarios.'
        } );
    }
}

const getUsuario = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        const usuario = await Usuario.findById( idUsuario );

        return res.json( {
            value: 1,
            usuario
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener al usuario.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener al usuario.'
        } );
    }
}

const postUsuarios = async ( req, res ) => {

    try {

        if ( req.body.foto ) {
            req.body.foto = await subirFoto( req.body.foto, undefined, 'usuarios' );
        }

        const usuario = new Usuario( req.body );

        await usuario.save();

        return res.json( {
            value: 1,
            msg: 'El usuario se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar al usuario.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar al usuario.'
        } );
    }
}

const putUsuarios = async ( req, res ) => {

    const { idUsuario } = req.params;
    const { password, foto, ...datos } = req.body;

    try {

        const usuario = await Usuario.findById( idUsuario );

        if ( password ) {
            datos.password = await Usuario.encryptPassword( password );
        }

        if ( foto ) {
            
            if ( usuario.foto ) {
    
                const pathImagen = path.join( __dirname, '../uploads/usuarios/', usuario.foto );

                if ( fs.existsSync( pathImagen ) ) {
                    fs.unlinkSync( pathImagen );
                }
            }

            datos.foto = await subirFoto( req.body.foto, undefined, 'usuarios' );
        }

        await usuario.updateOne( datos );

        return res.json( {
            value: 1,
            msg: 'El usuario se ha actualizado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al actualizar al usuario.', error );

        return res.json( {
            value: 0,
            msg:' Error al actualizar al usuario.'
        } );
    }
}

const deleteUsuarios = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        await Usuario.findByIdAndUpdate( idUsuario, { estado: false } );

        return res.json( {
            value: 1,
            msg: 'El usuario se ha eliminado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al borrar al usuario.', error );

        return res.json( {
            value: 0,
            msg: 'Error al borrar al usuario.'
        } );
    }
}

module.exports = {
    getUsuarios,
    getUsuario,
    postUsuarios,
    putUsuarios,
    deleteUsuarios,
}