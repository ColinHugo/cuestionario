const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeNoticia } = require( '../helpers/db-validators' );

const { validarCampos, validarJWT } = require( '../middlewares' );

const { getNoticias, postNoticias, 
        putNoticias, deleteNoticias } = require( '../controllers/noticias.controller' );

router.get( '/', getNoticias );

router.post( '/', [
    validarJWT,
    check( 'descripcion', 'La descripción de la noticia es obligatoria.' ).trim().notEmpty(),
    validarCampos
], postNoticias );

router.put( '/:idNoticia', [
    check( 'idNoticia', 'No es un id válido.' ).isMongoId(),
    check( 'idNoticia' ).custom( existeNoticia ),
    check( 'descripcion', 'La descripción de la noticia es obligatoria.' ).trim().notEmpty(),
    validarCampos
], putNoticias );

router.delete( '/:idNoticia', [
    check( 'idNoticia', 'No es un id válido.' ).isMongoId(),
    check( 'idNoticia' ).custom( existeNoticia ),
    validarCampos
], deleteNoticias );

module.exports = router;