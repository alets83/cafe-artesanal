const express = require( "express" );
const cors = require( "cors" );
require( "dotenv" ).config();

const { initializeDatabase, getDatabase } = require( "./src/mysql/config/database" );
const { apiRouter } = require( "./src/mysql/routers/apiRouter" );

const app = express();
const PORT = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( "/api/health", async ( req, res ) => {
    let dbStatus = "unknown";
    let dbError = null;
    
    try {
        const db = getDatabase();
        const pool = db.$client;
        const [ result ] = await pool.query( "SELECT 1 as connected, DATABASE() as db_name" );
        dbStatus = "connected";
        console.log( "Health check - DB query successful:", result[ 0 ] );
    }
    catch( error ) {
        dbStatus = "disconnected";
        dbError = error.message;
        console.error( "Health check - DB error:", error );
    }
    
    res.json( {
        exito: true,
        mensaje: "API funcionando correctamente",
        database: dbStatus,
        dbError: dbError || null,
        timestamp: new Date().toISOString()
    } );
} );

app.use( "/api", apiRouter );

app.use( ( req, res ) => {
    res.status( 404 ).json( {
        exito: false,
        mensaje: "Ruta no encontrada"
    } );
} );

app.use( ( error, req, res, next ) => {
    console.error( "❌ Error:", error.message );
    console.error( error.stack );

    res.status( 500 ).json( {
        exito: false,
        mensaje: "Error interno del servidor",
        error: process.env.NODE_ENV === "development" ? error.message : "Contacte al administrador"
    } );
} );

async function startServer() {
    try {
        console.log("🚀 Iniciando servidor...");
        console.log("📡 Conectando a base de datos...");
        
        await initializeDatabase();
        
        console.log("✅ Base de datos conectada correctamente");
        
        try {
            const db = getDatabase();
            const pool = db.$client;
            const [ tables ] = await pool.query( "SHOW TABLES" );
            console.log( "📋 Tablas encontradas en la base de datos:" );
            tables.forEach( table => {
                console.log( `   - ${ Object.values( table )[ 0 ] }` );
            } );
        }
        catch( e ) {
            console.warn( "⚠️ No se pudieron listar las tablas:", e.message );
        }
        
        app.listen( PORT, () => {
            console.log( "============================================" );
            console.log( "🚀 CRUD API - CoffeeArt" );
            console.log( "============================================" );
            console.log( `📍 Servidor: http://localhost:${ PORT }` );
            console.log( `❤️  Health:  http://localhost:${ PORT }/api/health` );
            console.log( "" );
            console.log( "📦 Endpoints disponibles:" );
            console.log( `   Roles:    http://localhost:${ PORT }/api/roles` );
            console.log( `   Users:    http://localhost:${ PORT }/api/users` );
            console.log( `   Posts:    http://localhost:${ PORT }/api/posts` );
            console.log( `   Products: http://localhost:${ PORT }/api/products` );
            console.log( `   Sales:    http://localhost:${ PORT }/api/sales` );
            console.log( "============================================" );
        } );
    }
    catch( e ) {
        console.error( "❌ Error FATAL al iniciar el servidor:", e.message );
        console.error( "\n🔍 Verifica:" );
        console.error( "   1. ¿MySQL está ejecutándose?");
        console.error( "   2. ¿Las credenciales en .env son correctas?");
        console.error( "   3. ¿La base de datos especificada existe?");
        console.error( "   4. ¿El usuario tiene permisos de acceso?");
        console.error( "\n📝 Contenido de .env (sin mostrar contraseña):");
        console.error( `   MYDB_HOST=${ process.env.MYDB_HOST }`);
        console.error( `   MYDB_PORT=${ process.env.MYDB_PORT }`);
        console.error( `   MYDB_USER=${ process.env.MYDB_USER }`);
        console.error( `   MYDB_NAME=${ process.env.MYDB_NAME }`);
        console.error( `   MYDB_PASS=${ process.env.MYDB_PASS ? "********" : "no definida" }`);
        
        process.exit( 1 );
    }
}

startServer();

module.exports = app;