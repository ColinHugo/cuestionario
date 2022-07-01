const { Pregunta } = require( '../models' );

const { generarGraficas } = require( '../helpers');

const getGraficas = async ( req, res ) => {

    const { desde, hasta } = req.params;

    try {

        const preguntas = await Pregunta.find( {
            createdAt: {
                $gte: new Date( desde ).toISOString(),
                $lte: new Date( hasta ).toISOString()
            }        
        } );

        if ( preguntas.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay respuestas que mostrar.'
            } );
        }

        const resultados = generarGraficas( preguntas );

        return res.json( {
            value: 1,
            resultados
        } );
        
    } catch ( error ) {

        console.error( 'Se generó un error al obtener las respuestas.', error );

        return res.json( {
            value: 0,
            msg: 'Se generó un error al obtener las respuestas.'
        } );
    }
}

const getGraficasById = async ( req, res ) => {

    const { idUsuario, desde, hasta } = req.params;

    try {

        const preguntas = await Pregunta.find( {

            $and: [ 
                {
                    usuario: {
                    _id: idUsuario
                    }
                },

                {
                    createdAt: {
                        $gte: new Date( desde ).toISOString(),
                        $lte: new Date( hasta ).toISOString()
                    } 
                }
             ]
        } );

        if ( preguntas.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay respuestas que mostrar.'
            } );
        }

        const resultados = generarGraficas( preguntas );

        return res.json( {
            value: 1,
            resultados
        } );
        
    } catch ( error ) {

        console.error( 'Se generó un error al obtener las respuestas.', error );

        return res.json( {
            value: 0,
            msg: 'Se generó un error al obtener las respuestas.'
        } );
    }
}

module.exports = {
    getGraficas,
    getGraficasById
}