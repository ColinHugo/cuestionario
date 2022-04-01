const { Temperatura } = require( '../models' );

const getTemperaturas = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        const temperaturas = await Temperatura.where( { usuario: idUsuario } )
            .populate( 'usuario', [ 'nombre', 'apellidos' ] );

        if ( temperaturas.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay temperaturas que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            temperaturas
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener las temperatura.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener las temperatura.'
        } );
    }
}

const postTemperatura = async ( req, res ) => {

    const { temperatura, oxigenacion, usuario } = req.body;

    try {

        const datos = new Temperatura( { temperatura, oxigenacion, usuario } );

        await datos.save();

        return res.json( {
            value: 1,
            msg: 'La temperatura y oxigenación se han guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar la temperatura y oxigenación.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar la temperatura y oxigenación.'
        } );
    }
}

const putTemperaturas = async ( req, res ) => {

    const { idTemperatura } = req.params;
    const { ...datos } = req.body;

    try {

        await Temperatura.findByIdAndUpdate( idTemperatura, datos );

        return res.json( {
            value: 1,
            msg: 'Los datos se han actualizado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al actualizar los datos.', error );

        return res.json( {
            value: 0,
            msg:' Error al actualizar los datos.'
        } );
    }
}

const deleteTemperaturas = async ( req, res ) => {

    const { idTemperatura } = req.params;

    try {

        await Temperatura.findByIdAndDelete( idTemperatura );

        return res.json( {
            value: 1,
            msg: 'Los datos se han eliminado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al borrar los datos.', error );

        return res.json( {
            value: 0,
            msg: 'Error al borrar los datos.'
        } );
    }
}

module.exports = {
    getTemperaturas,
    postTemperatura,
    putTemperaturas,
    deleteTemperaturas,
}