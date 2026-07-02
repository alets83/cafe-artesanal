const {mysqlTable, int, varchar, timestamp} = require ("drizzle-orm/mysql-core");

const Posts = mysqlTable ("Posts", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    user_id: int ("user_id",{unsigned:true}). notNull (),
    title: varchar ("title",{length:35}). notNull (),
    content: varchar ("content",{length:180}). notNull (),
    created_at: timestamp ("created_at"). defaultNow (). notNull (),
    updated_at: timestamp ("updated_at"). defaultNow (). onUpdateNow (). notNull ()
});
module.exports = {Posts};