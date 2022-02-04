const { Schema, model } = require( 'mongoose' );

const NoticiaSchema = Schema( {
    
    descripcion: {
        type: String,
        required: [ true, 'La descripción de la noticia es obligatoria.' ]
    },

    link: {
        type: String,
    },

    foto: {
        type: String
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    
}, {
    versionKey: false,
    timestamps: true
} );

NoticiaSchema.methods.toJSON = function(){

    const { _id, ...noticia } = this.toObject();
    noticia.idNoticia = _id;

    return noticia;
}

module.exports = model( 'Noticia', NoticiaSchema );