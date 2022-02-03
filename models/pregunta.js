const { Schema, model } = require( 'mongoose' );

const PreguntaSchema = Schema( {
    
    pregunta1: {
        type: String,
        required: [ true, 'La pregunta 1 es obligatoria.' ]
    },

    pregunta2: {
        type: String,
        required: [ true, 'La pregunta 2 es obligatoria.' ]
    },

    pregunta3: {
        type: String,
        required: [ true, 'La pregunta 3 es obligatoria.' ]
    },

    pregunta4: {
        type: String,
        required: [ true, 'La pregunta 4 es obligatoria.' ]
    },

    pregunta5: {
        type: String,
        required: [ true, 'La pregunta 5 es obligatoria.' ]
    },

    pregunta6: {
        type: String,
        required: [ true, 'La pregunta 6 es obligatoria.' ]
    },

    pregunta7: {
        type: String,
        required: [ true, 'La pregunta 7 es obligatoria.' ]
    },

    pregunta8: {
        type: String,
        required: [ true, 'La pregunta 8 es obligatoria.' ]
    },

    pregunta9: {
        type: String,
        required: [ true, 'La pregunta 9 es obligatoria.' ]
    },

    pregunta10: {
        type: String,
        required: [ true, 'La pregunta 10 es obligatoria.' ]
    },

    pregunta11: {
        type: String,
        required: [ true, 'La pregunta 11 es obligatoria.' ]
    },

    pregunta12: {
        type: String,
        required: [ true, 'La pregunta 12 es obligatoria.' ]
    },

    pregunta13: {
        type: String,
        required: [ true, 'La pregunta 13 es obligatoria.' ]
    },

    pregunta14: {
        type: String,
        required: [ true, 'La pregunta 14 es obligatoria.' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    
}, {
    versionKey: false,
    timestamps: true
} );

PreguntaSchema.methods.toJSON = function(){

    const { _id, ...pregunta } = this.toObject();
    pregunta.idPregunta = _id;

    return pregunta;
}

module.exports = model( 'Pregunta', PreguntaSchema );