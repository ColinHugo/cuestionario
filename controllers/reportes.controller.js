const { Pregunta } = require( '../models' );

const { generarPDF } = require( '../helpers');

const getReportes = async ( req, res ) => {

    const { desde, hasta, seccion } = req.params;
    let preguntas = [];
    let cabecera;

    try {

        switch ( seccion ) {

            case 'seccion1':

            cabecera = 'seccion1';

                preguntas = await Pregunta.find( {
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    pregunta1: true
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );
                
                break;

            case 'seccion2':

                cabecera = 'seccion2';

                preguntas = await Pregunta.find( {
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    $or: [
                        { pregunta2: true },
                        { pregunta3: true },
                        { pregunta4: true },
                        { pregunta5: true },
                        { pregunta6: true },
                    ]
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;

            case 'seccion3':

                cabecera = 'seccion3';

                preguntas = await Pregunta.find( {
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    $or: [
                        { pregunta7: true },
                        { pregunta8: true },
                        { pregunta9: true },
                        { pregunta10: true },
                        { pregunta11: true },
                        { pregunta12: true },
                        { pregunta13: true },
                        { pregunta14: true }
                    ]
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;
        
            default:
                return res.json( {
                    value: 0,
                    msg: 'Respuesta inválida.'
                } );
        }

        generarPDF( res, preguntas, cabecera );
        
    } catch ( error ) {

        console.log( 'Se generó un error al generar el reporte.', error );

        return res.json( {
            value: 0,
            msg: 'Se generó un error al generar el reporte.'
        } );
    }
}

const getReporteById = async ( req, res ) => {

    const { idUsuario, desde, hasta, seccion } = req.params;
    let preguntas = [];
    let cabecera;

    try {

        switch ( seccion ) {

            case 'seccion1':

            cabecera = 'seccion1';

                preguntas = await Pregunta.find( {
                    usuario: {
                        _id: idUsuario
                    },
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    pregunta1: true
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );
                
                break;

            case 'seccion2':

                cabecera = 'seccion2';

                preguntas = await Pregunta.find( {
                    usuario: {
                        _id: idUsuario
                    },
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    $or: [
                        { pregunta2: true },
                        { pregunta3: true },
                        { pregunta4: true },
                        { pregunta5: true },
                        { pregunta6: true },
                    ]
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;

            case 'seccion3':

                cabecera = 'seccion3';

                preguntas = await Pregunta.find( {
                    usuario: {
                        _id: idUsuario
                    },
                    createdAt: {
                        $gte: desde,
                        $lte: hasta
                    },
                    $or: [
                        { pregunta7: true },
                        { pregunta8: true },
                        { pregunta9: true },
                        { pregunta10: true },
                        { pregunta11: true },
                        { pregunta12: true },
                        { pregunta13: true },
                        { pregunta14: true }
                    ]
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;
        
            default:
                return res.json( {
                    value: 0,
                    msg: 'Respuesta inválida.'
                } );
        }

        generarPDF( res, preguntas, cabecera );
        
    } catch ( error ) {

        console.log( 'Se generó un error al generar el reporte.', error );

        return res.json( {
            value: 0,
            msg: 'Se generó un error al generar el reporte.'
        } );
    }
}

module.exports = {
    getReportes,
    getReporteById
}