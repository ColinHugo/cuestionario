const fs = require( 'fs' );
const path = require( 'path' );

const { Noticia } = require( '../models' );

const { subirFoto } = require( '../helpers' );

const getNoticias = async ( req, res ) => {

    try {

        const noticias = await Noticia.find().sort( { createdAt: -1 } )
            .populate( 'usuario', [ 'nombre', 'apellidos' ] );

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

    try {

        if ( req.body.foto ) {
            req.body.foto = await subirFoto( req.body.foto, undefined, 'noticias' );
        }

        const noticia = new Noticia( req.body );

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

    try {

        const noticia = await Noticia.findById( idNoticia );

        if ( req.body.foto ) {
            
            if ( noticia.foto ) {
    
                const pathImagen = path.join( __dirname, '../uploads/noticias/', noticia.foto );
    
                if ( fs.existsSync( pathImagen ) ) {
                    fs.unlinkSync( pathImagen );
                }
            }
            
            req.body.foto = await subirFoto( req.body.foto, undefined, 'noticias' );
        }

        await noticia.updateOne( req.body );

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

        const noticia = await Noticia.findById( idNoticia );

        if ( noticia.foto ) {

            const pathImagen = path.join( __dirname, '../uploads/noticias/', noticia.foto );

            if ( fs.existsSync( pathImagen ) ) {
                fs.unlinkSync( pathImagen );
            }
        }

        await noticia.deleteOne();

        return res.json( {
            value: 1,
            msg: 'La noticia se ha eliminado correctamente.'
        } );
        
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