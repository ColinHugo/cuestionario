const { Pregunta, Usuario, Visita } = require( '../models' );

const getPreguntas = async ( req, res ) => {

    const { idUsuario } = req.params;

    try {

        const preguntas = await Pregunta.where( { usuario: idUsuario } )
            .populate( 'usuario', [ 'nombre', 'apellidos' ] );

        if ( preguntas.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay respuestas que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            preguntas
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener las respuestas.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener las respuestas.'
        } );
    }
}

const postPreguntas = async ( req, res ) => {

    try {

        const cuestionario = new Pregunta( req.body );

        await cuestionario.save();

        return res.json( {
            value: 1,
            msg: 'El cuestionario se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar el cuestionario.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar el cuestionario.'
        } );
    }
}

const getPreguntasVisita = async ( req, res ) => {

    let { desde } = req.params;

    desde = desde.substring( 0, 10 );

    try {

        const preguntas = await Visita.find( { 
            createdAt: {
                $gte: desde
        } } )
            .populate( 'usuario', [ 'nombre', 'apellidos' ] );

        if ( preguntas.length === 0 ) {

            return res.json( {
                value: 0,
                msg: 'No hay respuestas que mostrar.'
            } );
        }

        return res.json( {
            value: 1,
            preguntas
        } );
        
    } catch ( error ) {

        console.error( 'Error al obtener las respuestas.', error );

        return res.json( {
            value: 0,
            msg: 'Error al obtener las respuestas.'
        } );
    }
}

const postPreguntasVisita = async ( req, res ) => {

    const { idUsuario } = req.params;

    const usuario = await Usuario.findById( idUsuario );

    req.body.usuario = usuario;


    try {

        const cuestionario = new Visita( req.body );

        await cuestionario.save();

        return res.json( {
            value: 1,
            msg: 'El cuestionario se ha guardado correctamente.'
        } );
        
    } catch ( error ) {

        console.error( 'Error al guardar el cuestionario.', error );

        return res.json( {
            value: 0,
            msg: 'Error al guardar el cuestionario.'
        } );
    }
}

module.exports = {
    getPreguntas,
    postPreguntas,
    getPreguntasVisita,
    postPreguntasVisita
}