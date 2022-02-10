const { Usuario } = require( '../models' );

const getUsuarios = async ( req, res ) => {

    try {

        const usuarios = await Usuario.find( { estado: true } );

        if ( usuarios.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay usuarios que mostrar.'
            } );
        }

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

    const { password, ...datos } = req.body;

    try {

        const usuario = new Usuario( {
            ...datos,
            password: await Usuario.encryptPassword( password )
        } );

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
    const { password, ...datos } = req.body;

    try {

        if ( password ) {
            datos.password = await Usuario.encryptPassword( password );
        }

        await Usuario.findByIdAndUpdate( idUsuario, datos );

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