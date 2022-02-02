const { Schema, model } = require( 'mongoose' );

const RolSchema = Schema( {

    rol: {
        type: String,
    }
}, {
    versionKey: false
} );

module.exports = model( 'Rol', RolSchema );