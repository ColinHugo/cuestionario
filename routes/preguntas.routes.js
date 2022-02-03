const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require( '../helpers/db-validators' );

const { validarCampos, validarJWT } = require( '../middlewares' );

const { getPreguntas, postPreguntas } = require( '../controllers/preguntas.controller' );

router.get( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getPreguntas );

router.post( '/:idUsuario', [
    validarJWT,
    check( 'pregunta1', 'La pregunta 1 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta2', 'La pregunta 2 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta3', 'La pregunta 3 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta4', 'La pregunta 4 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta5', 'La pregunta 5 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta6', 'La pregunta 6 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta7', 'La pregunta 7 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta8', 'La pregunta 8 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta9', 'La pregunta 9 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta10', 'La pregunta 10 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta11', 'La pregunta 11 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta12', 'La pregunta 12 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta13', 'La pregunta 13 es obligatoria.' ).escape().trim().notEmpty(),
    check( 'pregunta14', 'La pregunta 14 es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], postPreguntas );

module.exports = router;