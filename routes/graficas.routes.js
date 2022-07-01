const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require( '../helpers' );

const { validarCampos, validarFechas } = require( '../middlewares' );

const { getGraficas, getGraficasById } = require( '../controllers/graficas.controller' );

router.get( '/:desde/:hasta', [
    check( 'desde', 'Ingrese una fecha de inicio válida' ).escape().trim().isDate(),
    check( 'hasta', 'Ingrese una fecha de fin válida' ).escape().trim().isDate(),
    validarFechas,
    validarCampos
], getGraficas );

router.get( '/:idUsuario/:desde/:hasta', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    check( 'desde', 'Ingrese una fecha de inicio válida' ).escape().trim().isDate(),
    check( 'hasta', 'Ingrese una fecha de fin válida' ).escape().trim().isDate(),
    validarFechas,
    validarCampos
], getGraficasById );

module.exports = router;