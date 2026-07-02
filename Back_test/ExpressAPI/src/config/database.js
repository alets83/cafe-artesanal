const dotenv = require("dotenv");
const mysql = require("mysql2/promise"); // 1. Corregido el nombre de la librería
const { drizzle } = require("drizzle-orm/mysql2");

dotenv.config();

let db = null;

async function initializeDatabase() {
    if (db) {
        console.log("¡DB ya inicializada, reutilizando conexión!"); // 2. Corregida ortografía
        return db;
    }

    try {
        console.log("Intentando conectar a MySQL");
        // 3. Cambiadas comillas simples por comillas invertidas (backticks)
        console.log(`Host: ${process.env.MYDB_HOST}`);
        console.log(`Port: ${process.env.MYDB_PORT || 3306}`);
        console.log(`User: ${process.env.MYDB_USER}`); 
        console.log(`Database: ${process.env.MYDB_NAME}`);

        // Crear pool de conexiones
        const pool = mysql.createPool({
            host: process.env.MYDB_HOST,
            port: parseInt(process.env.MYDB_PORT) || 3306, // 4. Corregido 'MYDB_Port' a 'MYDB_PORT'
            user: process.env.MYDB_USER,
            password: process.env.MYDB_PASSWORD,
            database: process.env.MYDB_NAME, // 5. Corregido 'MYDB_Name' a 'MYDB_NAME'
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });

        const testConnection = await pool.getConnection();
        console.log("Pool de conexión creado");

        // 6. Corregido 'SELEC' por 'SELECT' y añadida coma faltante al final de la línea
        const [result] = await testConnection.query("SELECT 1 AS test, DATABASE() AS current_db, NOW() AS server_time");
        console.log("Consulta exitosa");
        console.log(`Base de datos actual: ${result[0].current_db}`);
        console.log(`Hora del servidor: ${result[0].server_time}`);

        testConnection.release();

        db = drizzle(pool, { // 7. Espacio añadido para mejor lectura
            logger: process.env.NODE_ENV === "development",
            casing: "preserve"
        });
        
        console.log("Drizzle ORM inicializado correctamente");
        return db;
    }
    catch (e) {
        // 8. Eliminado el 'console:' extra de la sintaxis
        console.error("Error al conectar con MySQL:", e.message);
        console.error("Detalles del error:", e);
        throw e;    
    }
}

function getDatabase() {
    if (!db) {
        throw new Error("La base de datos no ha sido inicializada. Ejecuta initializeDatabase() primero.");
    }
    return db;
}

module.exports = { initializeDatabase, getDatabase };
