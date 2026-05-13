const dns = require( 'node:dns' );
const dotenv = require( 'dotenv' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );
const cors = require ('cors');

// IMPORT CUSTOM MODULES
const postsRouter = require( './src/routers/posts.router' );
const productsRouter = require( './src/routers/products.router' );
const app = express();
const port = 8282;

// SETUP MODULES
dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: [ "GET", "POST", "UPDATE", "DELETE"],
    allowedHeaders: [ "Content-Type" ]
};

// CONNECT DATABASE
mongoose
    .connect( process.env.MONGO_URI )
    .then( () =>  {
        console.log( "Conexion extablecida" );
    })
    .catch( ( e ) => {
        console.log( "No se pudo establecer la Conexion", e );
    })

app.use( cors( corsOptions ) );
app.use( bodyParser.json() );
app.use( postsRouter );
app.use( productsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});