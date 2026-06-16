const {mysqlTable, int, varchar, timestamp, decimal, json} = require ("drizzle-orm/mysql-core");

const Products = mysqlTable ("Products", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    name: varchar ("name",{length:35}). notNull (),
    category_id: int ("category_id",{unsigned:true}). notNull (),
    description: varchar ("description",{length:120}). notNull (),
    price: decimal ("price",{presition:10,scale:2}). notNull (),
    images: json ("images"). default (null),
    created_at: timestamp ("created_at"). defaultNow (). notNull (),
    updated_at: timestamp ("updated_at"). defaultNow (). onUpdateNow (). notNull ()
});
module.exports = {Products};