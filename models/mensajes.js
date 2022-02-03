const { Schema, model } = require( 'mongoose' );

const MensajeSchema = Schema( {
    
    mensaje: {
        type: String,
        required: [ true, 'El mensaje es obligatorio.' ]
    },

    emisor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    receptor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    foto: {
        type: String
    }
    
}, {
    versionKey: false,
    timestamps: true
} );

MensajeSchema.methods.toJSON = function(){

    const { _id, ...mensaje } = this.toObject();
    mensaje.idMensaje = _id;

    return mensaje;
}

module.exports = model( 'Mensaje', MensajeSchema );