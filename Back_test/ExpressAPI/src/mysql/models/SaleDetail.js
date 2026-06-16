const {mysqlTable, int, varchar, timestamp, decimal} = require ("drizzle-orm/mysql-core");

const SaleDetails = mysqlTable ("SaleDetails", {
    id: int ("id",{unsigned:true}).primaryKey () .autoincrement (),
    sale_id: int ("sale_id",{unsigned:true}). notNull (),
    product_id: int ("product_id",{unsigned:true}). notNull (),
    quantity: int ("quantity",{unsigned:true}). notNull (),
    unit_price: decimal ("unit_price",{presition:10,scale:2}). notNull (),
    subtotal: decimal ("subtotal",{presition:10,scale:2}). notNull (),
    created_at: timestamp ("created_at"). defaultNow (). notNull ()
    });
module.exports = {SaleDetails};