const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeUsuario } = require( '../helpers/db-validators' );

const { validarCampos } = require( '../middlewares' );

const { getUsuarios, getUsuario, postUsuarios,
        putUsuarios, deleteUsuarios } = require( '../controllers/usuarios.controller' );

router.get( '/', getUsuarios );

router.get( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], getUsuario );

router.post( '/', [
    check( 'nombre', 'El nombre del usuario es obligatorio.' ).escape().trim().notEmpty(),
    check( 'apellidos', 'Los apellidos del usuario son obligatorios.' ).escape().trim().notEmpty(),
    check( 'area', 'El área del usuario es obligatoria.' ).escape().trim().notEmpty(),
    check( 'puesto', 'El puesto del usuario es obligatorio.' ).escape().trim().notEmpty(),
    validarCampos
], postUsuarios );

router.put( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], putUsuarios );

router.delete( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], deleteUsuarios );

module.exports = router;