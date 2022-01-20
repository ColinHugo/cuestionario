const { Noticia } = require( '../models' );

const getNoticias = async ( req, res ) => {

    try {

        const noticias = await Noticia.find();

        if ( noticias.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay noticias que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            noticias
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener las noticias.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener las noticias.'
        } );
    }
}

const postNoticias = async ( req, res ) => {

    const { descripcion } = req.body;

    try {

        const noticia = new Noticia( { descripcion } );

        await noticia.save();

        return res.json( {
            value: 1,
            msg: 'La noticia se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar la noticia.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar la noticia.'
        } );
    }
}

const putNoticias = async ( req, res ) => {

    const { idNoticia } = req.params;
    const { ...datos } = req.body;

    try {

        await Noticia.findByIdAndUpdate( idNoticia, datos );

        return res.json( {
            value: 1,
            msg: 'La noticia se ha actualizado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al actualizar la noticia.', error );

        return res.json( {
            value: 0,
            msg:' Error al actualizar la noticia.'
        } );
    }
}

const deleteNoticias = async ( req, res ) => {

    const { idNoticia } = req.params;

    try {

        await Noticia.findByIdAndDelete( idNoticia );

        return res.json( {
            value: 1,
            msg: 'La noticia se ha eliminado correctamente.'
        } )
        
    } catch ( error ) {

        console.error( 'Error al borrar la noticia.', error );

        return res.json( {
            value: 0,
            msg: 'Error al borrar la noticia.'
        } );
    }
}

module.exports = {
    getNoticias,
    postNoticias,
    putNoticias,
    deleteNoticias,
}