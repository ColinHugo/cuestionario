const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeEmail, existeUsuario } = require( '../helpers' );

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
    check( 'correo', 'El correo es obligatorio' ).escape().trim().notEmpty(),
    check( 'correo', 'Ingrese un correo válido' ).escape().trim().isEmail(),
    check( 'correo' ).custom( existeEmail ),
    check( 'password', 'El password es obligatorio' ).escape().trim().notEmpty(),
    check( 'password', 'El password debe tener al menos 5 caracteres' ).escape().trim().isLength( { min: 5 } ),
    check( 'area', 'El área del usuario es obligatoria.' ).escape().trim().notEmpty(),
    check( 'puesto', 'El puesto del usuario es obligatorio.' ).escape().trim().notEmpty(),
    validarCampos
], postUsuarios );

router.put( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    check( 'nombre', 'El nombre del usuario es obligatorio.' ).escape().trim().notEmpty(),
    check( 'apellidos', 'Los apellidos del usuario son obligatorios.' ).escape().trim().notEmpty(),
    check( 'area', 'El área del usuario es obligatoria.' ).escape().trim().notEmpty(),
    check( 'puesto', 'El puesto del usuario es obligatorio.' ).escape().trim().notEmpty(),
    validarCampos
], putUsuarios );

router.delete( '/:idUsuario', [
    check( 'idUsuario', 'No es un id válido.' ).isMongoId(),
    check( 'idUsuario' ).custom( existeUsuario ),
    validarCampos
], deleteUsuarios );

module.exports = router;