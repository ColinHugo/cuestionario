const { Noticia, Usuario } = require( '../models' );

const existeNoticia = async ( id ) => {

    const noticia = await Noticia.findById( id );

    if ( !noticia ) {
        throw new Error( `No existe noticia con el id: ${ id }.` );
    }
}

const existeUsuario = async ( id ) => {

    const usuario = await Usuario.findById( id );

    if ( !usuario || !usuario.estado ) {
        throw new Error( `No existe usuario con el id: ${ id }.` );
    }
}

module.exports = {
    existeNoticia,
    existeUsuario,
}