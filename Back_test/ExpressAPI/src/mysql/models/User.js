const { timestamp } = require("drizzle-orm/gel-core");
const {mysqlTable, int, varchar, timestamp} = require ("drizzle-orm/mysql-core");

const User = mysqlTable ("Users", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    role_id: int ("role_id",{unsigned:true}). notNull (),
    nickname: varchar ("nickname",{length:25}). notNull (),
    name: varchar ("name",{length:100}). notNull (),
    email: varchar ("email",{length:255}). notNull () .unique (),
    password: varchar ("password",{length:255}). notNull (),
    created_at: timestamp ("created_at"). defaultNow (). notNull (),
    updated_at: timestamp ("updated_at"). defaultNow (). onUpdateNow (). notNull ()
});
module.exports = {User};