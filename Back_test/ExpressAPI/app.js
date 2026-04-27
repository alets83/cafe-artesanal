const dns = require( 'node:dns' );
const dotenv = require( 'dotenv' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

dns.setServers(['8.8.8.8', '8.8.4.4']);

const postsRouter = require( './src/routers/posts.router' );
const app = express();
const port = 8282;


dotenv.config();

mongoose
    .connect( process.env.MONGO_URI )
    .then( () =>  {
        console.log( "Conexion extablecida" );
    })
    .catch( ( e ) => {
        console.log( "No se pudo establecer la Conexion", e );
    })

app.use( bodyParser.json() );
app.use( postsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});