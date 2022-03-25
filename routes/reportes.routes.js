const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require( '../helpers' );

const { validarCampos } = require( '../middlewares' );

const { getReportes, getReporteById } = require( '../controllers/reportes.controller' );

router.get( '/:desde/:hasta/:seccion', getReportes );

router.get( '/:idUsuario/:desde/:hasta/:seccion', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getReporteById );

module.exports = router;