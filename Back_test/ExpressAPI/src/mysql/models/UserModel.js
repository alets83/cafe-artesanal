const { mysqlTable, int, varchar, timestamp } = require( "drizzle-orm/mysql-core" );
const { relations } = require( "drizzle-orm" );
const { Roles } = require( "./RoleModel" );

const Users = mysqlTable( "Users", {
    id: int( "id", { unsigned: true }  ).primaryKey().autoincrement(),
    role_id: int( "role_id", { unsigned: true } ),
    nickname: varchar( "nickname", { length: 100 } ).notNull().unique(),
    name: varchar( "name", { length: 100 } ).notNull(),
    email: varchar( "email", { length: 255 } ).notNull().unique(),
    password: varchar( "password", { length: 255 } ).notNull(),

    createdAt: timestamp( "created_at" ).defaultNow().notNull(),
    updated_at: timestamp( "updated_at" ).defaultNow().onUpdateNow().notNull()
} );

const UsersRelations = relations( Users, ( { one, many } ) => ( {
    role: one( Roles, {
        fields: [ Users.role_id ],
        references: [ Roles.id ]
    } ),
    posts: many( require( "./PostModel" ).Posts ),
    sales: many( require( "./SaleModel" ).Sales )
} ) );

module.exports = { Users, UsersRelations };