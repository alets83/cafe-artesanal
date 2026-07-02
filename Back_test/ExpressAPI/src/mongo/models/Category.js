const {mysqlTable, int, varchar, timestamp} = require ("drizzle-orm/mysql-core");

const Category = mysqlTable ("Category", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    category: varchar ("category",{length:25}) .notNull () .unique(), 
    created_at: timestamp ("created_at"). defaultNow (). notNull (),
    updated_at: timestamp ("updated_at"). defaultNow (). onUpdateNow (). notNull ()
});
module.exports = {Category};