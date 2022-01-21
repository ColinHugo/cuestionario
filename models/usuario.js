const { Schema, model } = require( 'mongoose' );

const UsuarioSchema = Schema( {
    
    nombre: {
        type: String,
        required: [ true, 'El nombre del usuario es obligatorio.' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos del usuario son obligatorios.' ]
    },

    area: {
        type: String,
        required: [ true, 'El área del usuario es obligatoria.' ]
    },

    puesto: {
        type: String,
        required: [ true, 'El puesto del usuario es obligatorio.' ]
    },

    estado: {
        type: Boolean,
        default: true,
    },

    foto: {
        type: String
    }
    
}, {
    versionKey: false,
    timestamps: true
} );

UsuarioSchema.methods.toJSON = function(){

    const { _id, ...usuario } = this.toObject();
    usuario.idUsuario = _id;

    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );