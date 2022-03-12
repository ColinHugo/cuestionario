const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeMensaje } = require('../helpers');

const { validarCampos } = require( '../middlewares' );

const { getImagenMensaje, putImagen } = require( '../controllers/uploads.controller' );

// **********************************************************************
// *******************     M E N S A J E S *****************************
// **********************************************************************

router.get( '/mensajes/:idMensaje', [
    check( 'idMensaje', 'No es un id válido.' ).isMongoId(),
    check( 'idMensaje' ).custom( existeMensaje ),
    validarCampos
], getImagenMensaje );

router.put( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeMensaje ),
    validarCampos
], putImagen );

module.exports = router;