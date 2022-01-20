const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existeNoticia } = require( '../helpers/db-validators' );

const { validarCampos } = require( '../middlewares' );

const { getNoticias, postNoticias, 
        putNoticias, deleteNoticias } = require( '../controllers/noticias.controller' );

router.get( '/', getNoticias );

router.post( '/', [
    check( 'descripcion', 'La descripción de la noticia es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], postNoticias );

router.put( '/:idNoticia', [
    check( 'idNoticia', 'No es un id válido.' ).isMongoId(),
    check( 'idNoticia' ).custom( existeNoticia ),
    validarCampos
], putNoticias );

router.delete( '/:idNoticia', [
    check( 'idNoticia', 'No es un id válido.' ).isMongoId(),
    check( 'idNoticia' ).custom( existeNoticia ),
    validarCampos
], deleteNoticias );

module.exports = router;