const {mysqlTable, int, varchar, timestamp, decimal} = require ("drizzle-orm/mysql-core");

const Sales = mysqlTable ("Sales", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    user_id: int ("user_id",{unsigned:true}). notNull (),
    total_payments: decimal ("total_payments",{presition:10,scale:2}). notNull (),
    total_products: int ("total_products",{unsigned:true}). notNull (),
    total_items: int ("total_items",{unsigned:true}). notNull (),
    created_at: timestamp ("created_at"). defaultNow (). notNull ()
   });
module.exports = {Sales};