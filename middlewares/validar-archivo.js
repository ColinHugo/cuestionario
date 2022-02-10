const validarArchivo = ( req, res, next ) => {

    if( !req.files || Object.keys( req.files ).length === 0 || !req.files.archivo  ) {

        return res.json( {
            value: 0,
            msg: 'El archivo es obligatorio'
        } );
    }

    next();
}

module.exports = {
    validarArchivo,
}