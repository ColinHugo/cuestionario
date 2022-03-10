const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeTemperatura, existeUsuario } = require( '../helpers/db-validators' );

const { validarCampos, validarJWT } = require( '../middlewares' );

const { getTemperaturas, postTemperatura, 
        putTemperaturas, deleteTemperaturas } = require( '../controllers/temperaturas.controller' );

router.get( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getTemperaturas );

router.post( '/:idUsuario', [
    validarJWT,
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    check( 'temperatura', 'La temperatura es obligatoria.' ).escape().trim().notEmpty(),
    check( 'oxigenacion', 'La oxigenacion es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], postTemperatura );

router.put( '/:idTemperatura', [
    check( 'idTemperatura', 'No es un id válido.' ).isMongoId(),
    check( 'idTemperatura' ).custom( existeTemperatura ),
    check( 'temperatura', 'La temperatura es obligatoria.' ).escape().trim().notEmpty(),
    check( 'oxigenacion', 'La oxigenacion es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], putTemperaturas );

router.delete( '/:idTemperatura', [
    check( 'idTemperatura', 'No es un id válido.' ).isMongoId(),
    check( 'idTemperatura' ).custom( existeTemperatura ),
    validarCampos
], deleteTemperaturas );

module.exports = router;