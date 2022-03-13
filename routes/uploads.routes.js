const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeMensaje, existeNoticia, existePrevencion, existeUsuario } = require('../helpers');

const { validarCampos } = require( '../middlewares' );

const { getImagenMensaje, getImagenNoticia,
        getImagenPrevencion, getImagenUsuario } = require( '../controllers/uploads.controller' );

// **********************************************************************
// *******************     M E N S A J E S *****************************
// **********************************************************************

router.get( '/mensajes/:idMensaje', [
    check( 'idMensaje', 'No es un id válido.' ).isMongoId(),
    check( 'idMensaje' ).custom( existeMensaje ),
    validarCampos
], getImagenMensaje );

// **********************************************************************
// *******************  N O T I C I A S *****************************
// **********************************************************************

router.get( '/noticias/:idNoticia', [
    check( 'idNoticia', 'No es un id válido.' ).isMongoId(),
    check( 'idNoticia' ).custom( existeNoticia ),
    validarCampos
], getImagenNoticia );

// **********************************************************************
// ******************     P R E V E N C I O N     **********************
// **********************************************************************

router.get( '/prevenciones/:idPrevencion', [
    check( 'idPrevencion', 'No es un id válido.' ).isMongoId(),
    check( 'idPrevencion' ).custom( existePrevencion ),
    validarCampos
], getImagenPrevencion );

// **********************************************************************
// *******************  U S U A R I O *****************************
// **********************************************************************

router.get( '/usuarios/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getImagenUsuario );

module.exports = router;