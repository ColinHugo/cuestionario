const fs = require( 'fs' );
const path = require( 'path' );

const { Prevencion } = require( '../models' );

const { subirFoto } = require('../helpers');

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

        if ( req.body.foto ) {
            req.body.foto = await subirFoto( req.body.foto, undefined, 'prevenciones' );
        }

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

    try {

        const prevencion = await Prevencion.findById( idPrevencion );

        if ( req.body.foto) {
            
            if ( prevencion.foto ) {
                
                const pathImagen = path.join( __dirname, '../uploads/prevenciones/', prevencion.foto );
    
                if ( fs.existsSync( pathImagen ) ) {
                    fs.unlinkSync( pathImagen );
                }
            }

            req.body.foto = await subirFoto( req.body.foto, undefined, 'prevenciones' );
        }

        await prevencion.updateOne( req.body );

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

        const prevencion = await Prevencion.findById( idPrevencion );

        if ( prevencion.foto ) {
            
            const pathImagen = path.join( __dirname, '../uploads/prevenciones/', prevencion.foto );

            if ( fs.existsSync( pathImagen ) ) {
                fs.unlinkSync( pathImagen );
            }
        }

        await prevencion.deleteOne();

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