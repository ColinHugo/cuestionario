const { Schema, model } = require( 'mongoose' );

const TemperaturaSchema = Schema( {
    
    temperatura: {
        type: String,
        required: [ true, 'La temperatura es obligatoria.' ]
    },

    oxigenacion: {
        type: String,
        required: [ true, 'La temperatura es obligatoria.' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    
}, {
    versionKey: false,
    timestamps: true
} );

TemperaturaSchema.methods.toJSON = function(){

    const { _id, ...temperatura } = this.toObject();
    temperatura.idTemperatura = _id;

    return temperatura;
}

module.exports = model( 'Temperatura', TemperaturaSchema );