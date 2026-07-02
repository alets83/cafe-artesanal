const dotenv = require( "dotenv" );
const mysql = require( "mysql2/promise" );
const { drizzle } = require( "drizzle-orm/mysql2" );

dotenv.config();

let db = null;

async function initializeDatabase() {
    if( db ) {
        console.log( "ℹ️ DB ya inicializada, reutilizando conexión" );
        return db;
    }

    try {
        console.log("📡 Intentando conectar a MySQL...");
        console.log(`   Host: ${ process.env.MYDB_HOST }`);
        console.log(`   Port: ${ process.env.MYDB_PORT || 3306 }`);
        console.log(`   User: ${ process.env.MYDB_USER }`);
        console.log(`   Database: ${ process.env.MYDB_NAME }`);
        
        // Crear pool de conexiones
        const pool = mysql.createPool( {
            host:                  process.env.MYDB_HOST,
            port:                  parseInt( process.env.MYDB_PORT ) || 3306,
            user:                  process.env.MYDB_USER,
            password:              process.env.MYDB_PASS,
            database:              process.env.MYDB_NAME,
            waitForConnections:    true,
            connectionLimit:       10,
            queueLimit:            0,
            enableKeepAlive:       true,
            keepAliveInitialDelay: 0
        } );

        const testConnection = await pool.getConnection();
        console.log( "✅ Pool de conexiones creado" );
        
        const [result] = await testConnection.query( "SELECT 1 as test, DATABASE() as current_db, NOW() as server_time" );
        console.log( "✅ Consulta de prueba exitosa:" );
        console.log( `   Base de datos actual: ${ result[ 0 ].current_db }` );
        console.log( `   Hora del servidor: ${ result[ 0 ].server_time }` );
        
        testConnection.release();
        
        db = drizzle( pool, { 
            logger: process.env.NODE_ENV === "development",
            casing: "preserve"
        });
        console.log( "✅ Drizzle ORM inicializado correctamente" );
        
        return db;
    }
    catch( e ) {
        console.error( "❌ Error al conectar con MySQL:", e.message );
        console.error( "Detalles del error:", e );
        throw e;
    }
}

function getDatabase() {
    if( ! db ) {
        throw new Error( "La base de datos no ha sido inicializada. Ejecuta initializeDatabase() primero." );
    }
    return db;
}

module.exports = { initializeDatabase, getDatabase };