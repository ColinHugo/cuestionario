const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require( '../helpers' );

const { validarCampos, validarJWT } = require( '../middlewares' );

const { getMensajes, postMensajes, deleteMensajes } = require( '../controllers/mensajes.controller' );

router.get( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getMensajes );

router.post( '/:idReceptor', [
    validarJWT,
    check( 'mensaje', 'El mensaje es obligatorio.' ).escape().trim().notEmpty(),
    check( 'idReceptor' ).custom( existeUsuario ),
    validarCampos
], postMensajes );

router.delete( '/:idMensaje', [
    check( 'idMensaje', 'No es un id válido.' ).isMongoId(),
    validarCampos
], deleteMensajes )

module.exports = router;