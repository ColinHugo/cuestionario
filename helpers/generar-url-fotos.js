const generarUrlFotos = ( req, carpeta, documentos ) => {

    documentos.forEach( documento => {

        if ( documento.foto ) {
            documento.foto = `${ req.protocol }://${ req.headers.host }/${ carpeta }/${ documento.foto }`;
        } else {
            documento.foto = `${ req.protocol }://${ req.headers.host }/no-image.jpg`;
        }
    } );

    return documentos;
}

module.exports = {
    generarUrlFotos
}