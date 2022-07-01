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
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );
                
                break;

            case 'seccion2':

                cabecera = 'seccion2';

                preguntas = await Pregunta.find( {
                    createdAt: {
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;

            case 'seccion3':

                cabecera = 'seccion3';

                preguntas = await Pregunta.find( {
                    createdAt: {
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
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
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );
                
                break;

            case 'seccion2':

                cabecera = 'seccion2';

                preguntas = await Pregunta.find( {
                    usuario: {
                        _id: idUsuario
                    },
                    createdAt: {
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
                } ).populate( 'usuario', [ 'nombre', 'apellidos' ] );

                break;

            case 'seccion3':

                cabecera = 'seccion3';

                preguntas = await Pregunta.find( {
                    usuario: {
                        _id: idUsuario
                    },
                    createdAt: {
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    }
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