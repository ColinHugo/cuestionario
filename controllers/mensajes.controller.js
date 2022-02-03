const { Mensaje, Usuario } = require( '../models' );

const getMensajes = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        const mensajes = await Mensaje.where( { receptor: idUsuario } )
            .populate( 'emisor', [ 'nombre', 'apellidos'] )
            .populate( 'receptor', [ 'nombre', 'apellidos'] );

        if ( mensajes.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay mensajes que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            mensajes
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener los mensajes.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener los mensajes.'
        } );
    }
}

const postMensajes = async ( req, res ) => {
    
    const { idReceptor } = req.params;

    try {

        const receptor = await Usuario.findById( idReceptor );

        req.body.emisor = req.body.usuario;
        req.body.receptor = receptor;

        const mensaje = new Mensaje( req.body );

        await mensaje.save();

        return res.json( {
            value: 1,
            msg: 'El mensaje se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar el mensaje.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar el mensaje.'
        } );
    }
}

const deleteMensajes = async ( req, res ) => {

    const { idMensaje } = req.params;

    try {

        await Mensaje.findByIdAndDelete( idMensaje )

        return res.json( {
            value: 1,
            msg: 'El mensaje se han eliminado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al borrar el mensaje.', error );

        return res.json( {
            value: 0,
            msg: 'Error al borrar el mensaje.'
        } );
    }
}

module.exports = {
    getMensajes,
    postMensajes,
    deleteMensajes
}