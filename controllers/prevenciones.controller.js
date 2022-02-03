const { Prevencion } = require( '../models' );

const getPrevenciones = async ( req, res ) => {

    try {

        const prevenciones = await Prevencion.find( { estado: true } );

        if ( prevenciones.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay prevenciones que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            prevenciones
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener las prevenciones.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener las prevenciones.'
        } );
    }
}

const postPrevenciones = async ( req, res ) => {

    try {

        const prevencion = new Prevencion( req.body );

        await prevencion.save();

        return res.json( {
            value: 1,
            msg: 'La prevencion se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar la prevencion.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar la prevencion.'
        } );
    }
}

const putPrevenciones = async ( req, res ) => {

    const { idPrevencion } = req.params;
    const { ...datos } = req.body;

    try {

        await Prevencion.findByIdAndUpdate( idPrevencion, datos );

        return res.json( {
            value: 1,
            msg: 'La prevencion se ha actualizado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al actualizar la prevencion.', error );

        return res.json( {
            value: 0,
            msg:' Error al actualizar la prevencion.'
        } );
    }
}

const deletePrevenciones = async ( req, res ) => {

    const { idPrevencion } = req.params;

    try {

        await Prevencion.findByIdAndUpdate( idPrevencion, { estado: false } );

        return res.json( {
            value: 1,
            msg: 'La prevencion se ha eliminado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al borrar la prevencion.', error );

        return res.json( {
            value: 0,
            msg: 'Error al borrar la prevencion.'
        } );
    }
}

module.exports = {
    getPrevenciones,
    postPrevenciones,
    putPrevenciones,
    deletePrevenciones
}