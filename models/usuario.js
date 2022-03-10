const { Schema, model } = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const UsuarioSchema = Schema( {
    
    nombre: {
        type: String,
        required: [ true, 'El nombre del usuario es obligatorio.' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos del usuario son obligatorios.' ]
    },

    correo: {
        type: String,
        required: [ true, 'El correo es obligatorio.' ],
        unique: [ true, 'El correo ya está registrado.' ]
    },

    password: {
        type: String,
        required: [ true, 'La contraseña es obligatoria.' ],
    },

    area: {
        type: String,
        required: [ true, 'El área del usuario es obligatoria.' ]
    },

    puesto: {
        type: String,
        required: [ true, 'El puesto del usuario es obligatorio.' ]
    },

    rol: {
        type: Number,
        default: 3,
        enum: [ 1, 2, 3 ]
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

UsuarioSchema.pre( 'save', async function ( next ){

    if ( !this.isModified( 'password' ) ) {
        next();
    }

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash( this.password, salt );
} );

UsuarioSchema.statics.encryptPassword = async ( password ) => {
    
    const salt = await bcrypt.genSalt();

    return bcrypt.hashSync( password, salt );
}

UsuarioSchema.methods.comparePassword = async function ( password ) {
    return await bcrypt.compare( password, this.password );
}

UsuarioSchema.methods.toJSON = function(){

    const { _id, password, estado, createdAt, updatedAt, ...usuario } = this.toObject();
    usuario.idUsuario = _id;

    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );