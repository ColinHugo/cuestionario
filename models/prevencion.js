const { Schema, model } = require( 'mongoose' );

const PrevencionSchema = Schema( {
    
    descripcion: {
        type: String,
        required: [ true, 'La descripcion de la prevención es obligatoria.' ]
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

PrevencionSchema.methods.toJSON = function(){

    const { _id, ...prevencion } = this.toObject();
    prevencion.idPrevencion = _id;

    return prevencion;
}

module.exports = model( 'Prevencion', PrevencionSchema );