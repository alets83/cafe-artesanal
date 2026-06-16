const dotenv = require ("dotenv");
const mysql = require ("mysql2/promise");
const {drizzle} = require ("drizzle-orm/mysql2");
dotenv.config ();
const poolConnection = mysql.createPool (
    {
        host:process.env.MYDB_HOST,
        port:process.env.MYDB_PORT,
        user:process.env.MYDB_USER,
        password:process.env.MYDB_PASS,
        database:process.env.MYDB_NAME,
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0        
    }
);
const db= drizzle (poolConnection);
module.exports = {db};

// pool - genera una conexion
