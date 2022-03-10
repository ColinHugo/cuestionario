const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { existePrevencion } = require( '../helpers/db-validators' );

const { validarCampos } = require( '../middlewares' );

const { getPrevenciones, postPrevenciones, 
        putPrevenciones, deletePrevenciones } = require( '../controllers/prevenciones.controller' );

router.get( '/', getPrevenciones );

router.post( '/', [
    check( 'descripcion', 'La descripción de la noticia es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], postPrevenciones );

router.put( '/:idPrevencion', [
    check( 'idPrevencion', 'No es un id válido.' ).isMongoId(),
    check( 'idPrevencion' ).custom( existePrevencion ),
    check( 'descripcion', 'La descripción de la noticia es obligatoria.' ).escape().trim().notEmpty(),
    validarCampos
], putPrevenciones );

router.delete( '/:idPrevencion', [
    check( 'idPrevencion', 'No es un id válido.' ).isMongoId(),
    check( 'idPrevencion' ).custom( existePrevencion ),
    validarCampos
], deletePrevenciones );

module.exports = router;