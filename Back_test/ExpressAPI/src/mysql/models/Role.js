const {mysqlTable, int, varchar, timestamp} = require ("drizzle-orm/mysql-core");

const Roles = mysqlTable ("Roles", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    name: varchar ("name",{length:25}). notNull (),
    created_at: timestamp ("created_at"). defaultNow (). notNull (),
    updated_at: timestamp ("updated_at"). defaultNow (). onUpdateNow (). notNull ()
});
module.exports = {Roles};