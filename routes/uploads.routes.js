const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require('../helpers');

const { validarCampos, validarArchivo } = require( '../middlewares' );

const { getImagen, postArchivo, putImagen } = require( '../controllers/uploads.controller' );

router.get( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getImagen );

router.post( '/:idUsuario', [
    validarArchivo,
    check( 'idUsuario' ).custom( existeUsuario ),
], postArchivo );

router.put( '/:idUsuario', [
    validarArchivo,
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], putImagen );

module.exports = router;