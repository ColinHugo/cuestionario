const { Noticia, Prevencion, Usuario } = require( '../models' );

const existeEmail = async( correo = '' ) => {
    
    const email = await Usuario.findOne( { correo } );
    
    if ( email ) {
        throw new Error( `El correo: ${ correo }, ya está registrado` );
    }
}

const existeNoticia = async ( id ) => {

    const noticia = await Noticia.findById( id );

    if ( !noticia ) {
        throw new Error( `No existe noticia con el id: ${ id }.` );
    }
}

const existePrevencion = async ( id ) => {

    const prevencion = await Prevencion.findById( id );

    if ( !prevencion ) {
        throw new Error( `No existe prevención con el id: ${ id }.` );
    }
}

const existeUsuario = async ( id ) => {

    const usuario = await Usuario.findById( id );

    if ( !usuario || !usuario.estado ) {
        throw new Error( `No existe usuario con el id: ${ id }.` );
    }
}

module.exports = {
    existeEmail,
    existeNoticia,
    existePrevencion,
    existeUsuario,
}