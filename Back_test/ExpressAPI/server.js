const {db} = require ("./src/mysql/config/database")

console.log (db);

async function testConection () {
    try {
        const queryConection = await db.execute ("select 1 as test");
        console.log (queryConection);
     }
    catch (e){ 
        console.log (e.message) 
    };
}

testConection ();