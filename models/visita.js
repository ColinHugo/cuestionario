const { Schema, model } = require( 'mongoose' );

const VisitaSchema = Schema( {
    
    nombre: {
        type: String,
        required: [ true, 'El nombre del visitante es obligatorio.' ]
    },

    apellidos: {
        type: String,
        required: [ true, 'Los apellidos del visitante son obligatorios.' ]
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    motivoVisita: {
        type: String,
        required: [ true, 'El motivo de la visita es obligatoria.' ]
    },

    pregunta1: {
        type: Boolean,
        required: [ true, 'La pregunta 1 es obligatoria.' ]
    },

    pregunta2: {
        type: Boolean,
        required: [ true, 'La pregunta 2 es obligatoria.' ]
    },

    pregunta3: {
        type: Boolean,
        required: [ true, 'La pregunta 3 es obligatoria.' ]
    },

    pregunta4: {
        type: Boolean,
        required: [ true, 'La pregunta 4 es obligatoria.' ]
    },

    pregunta5: {
        type: Boolean,
        required: [ true, 'La pregunta 5 es obligatoria.' ]
    },

    pregunta6: {
        type: Boolean,
        required: [ true, 'La pregunta 6 es obligatoria.' ]
    },

    pregunta7: {
        type: Boolean,
        required: [ true, 'La pregunta 7 es obligatoria.' ]
    },

    pregunta8: {
        type: Boolean,
        required: [ true, 'La pregunta 8 es obligatoria.' ]
    },

    pregunta9: {
        type: Boolean,
        required: [ true, 'La pregunta 9 es obligatoria.' ]
    },

    pregunta10: {
        type: Boolean,
        required: [ true, 'La pregunta 10 es obligatoria.' ]
    },

    pregunta11: {
        type: Boolean,
        required: [ true, 'La pregunta 11 es obligatoria.' ]
    },

    pregunta12: {
        type: Boolean,
        required: [ true, 'La pregunta 12 es obligatoria.' ]
    },

    pregunta13: {
        type: Boolean,
        required: [ true, 'La pregunta 13 es obligatoria.' ]
    },

    pregunta14: {
        type: Boolean,
        required: [ true, 'La pregunta 14 es obligatoria.' ]
    },

    temperatura: {
        type: String,
        required: [ true, 'La temperatura es obligatoria.' ]
    },

    oxigenacion: {
        type: String,
        required: [ true, 'La temperatura es obligatoria.' ]
    },
    
}, {
    versionKey: false,
    timestamps: true
} );

module.exports = model( 'Visita', VisitaSchema );