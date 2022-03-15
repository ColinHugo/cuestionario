const express = require( 'express');
const cors = require( 'cors');
const mongoSanitize = require( 'express-mongo-sanitize' );

const { dbConnection } = require( '../database/config');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/auth',
            mensajes: '/mensajes',
            noticias: '/noticias',
            preguntas: '/cuestionarios',
            temperaturas: '/temperaturas',
            usuarios: '/usuarios',
            prevenciones: '/prevenciones'
        }

        this.conectarDB();

        this.middlewares();
        
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json( { limit: '100mb' } ) );
        this.app.use( mongoSanitize() );
        this.app.use( express.static( __dirname + '/../uploads' ) );
        this.app.use( express.static( __dirname + '/../assets' ) );
    }

    routes(){

        this.app.use( this.paths.auth, require( '../routes/auth.routes' ) );
        this.app.use( this.paths.mensajes, require( '../routes/mensajes.routes' ) );
        this.app.use( this.paths.noticias, require( '../routes/noticias.routes' ) );
        this.app.use( this.paths.preguntas, require( '../routes/preguntas.routes' ) );
        this.app.use( this.paths.prevenciones, require( '../routes/prevenciones.routes' ) );
        this.app.use( this.paths.temperaturas, require( '../routes/temperaturas.routes' ) );
        this.app.use( this.paths.usuarios, require( '../routes/usuarios.routes' ) );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en el puerto:', this.port );
        } );
    }
}

module.exports = Server;