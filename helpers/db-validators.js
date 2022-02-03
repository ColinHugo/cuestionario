const res = require('express/lib/response');
const { Noticia, Prevencion, Temperatura, Usuario } = require( '../models' );

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

const existeTemperatura = async ( id ) => {

    const temperatura = await Temperatura.findById( id );

    if ( !temperatura ) {
        throw new Error( `No existe temperatura con el id: ${ id }.` );
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
    existeTemperatura,
    existeUsuario,
}