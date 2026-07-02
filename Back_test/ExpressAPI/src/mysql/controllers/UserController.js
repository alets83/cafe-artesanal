const { eq, inArray } = require( "drizzle-orm" );
const { getDatabase } = require( "../config/database" );
const { Users } = require( "../models/UserModel" );

const UserController = {
    async getAll( req, res ) {
        try {
            const db = getDatabase();
            const resultados = await db.select( {
                id: Users.id,
                nickname: Users.nickname,
                name: Users.name,
                email: Users.email,
                role_id: Users.role_id
            } ).from( Users );

            res.json( {
                success: true,
                datos: resultados,
                total: resultados.length
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al obtener los usuarios",
                error: e.message
            } );
        }
    },

    async getById( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;

            const result = await db.select( {
                id: Users.id,
                nickname: Users.nickname,
                name: Users.name,
                email: Users.email,
                role_id: Users.role_id
            } )
                .from( Users )
                .where( eq( Users.id, parseInt( id ) ) );

            if( result.length === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Usuario no encontrado"
                } );
            }

            res.json( {
                success: true,
                datos: result[ 0 ]
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al obtener el usuario",
                error: e.message
            } );
        }
    },

    async create( req, res ) {
        try {
            const db = getDatabase();
            const { nickname, name, email, password, role_id } = req.body;

            if( ! nickname || ! name || ! email || ! password ) {
                return res.status( 400 ).json( {
                    success: false,
                    message: "Nickname, nombre, email y contraseña son obligatorios"
                } );
            }

            const result = await db.insert( Users )
                .values( {
                    nickname,
                    name,
                    email,
                    password,
                    role_id: role_id || null
                } );

            res.status( 201 ).json( {
                success: true,
                message: "Usuario creado exitosamente",
                datos: {
                    id: result[ 0 ].insertId,
                    nickname,
                    name,
                    email,
                    role_id: role_id || null
                }
            } );
        }
        catch( e ) {
            if( e.code === "ER_DUP_ENTRY" ) {
                return res.status( 409 ).json( {
                    success: false,
                    message: "El email ya está registrado"
                } );
            }

            res.status( 500 ).json( {
                success: false,
                message: "Error al crear el usuario",
                error: e.message
            } );
        }
    },

    async update( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;
            const { nickname, name, email, password, role_id } = req.body;

            const dataUpdate = {};

            if( nickname ) dataUpdate.nickname = nickname;
            if( name ) dataUpdate.name = name;
            if( email ) dataUpdate.email = email;
            if( password ) dataUpdate.password = password;
            if( role_id !== undefined ) dataUpdate.role_id = role_id;

            if( Object.keys( dataUpdate ).length === 0 ) {
                return res.status( 400 ).json( {
                    success: false,
                    message: "No se proporcionaron datos para actualizar"
                } );
            }

            const result = await db.update( Users )
                .set( dataUpdate )
                .where( eq( Users.id, parseInt( id ) ) );

            if( result[ 0 ].affectedRows === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Usuario no encontrado"
                } );
            }

            res.json( {
                success: true,
                message: "Usuario actualizado exitosamente"
            } );
        }
        catch( e ) {
            if( e.code === "ER_DUP_ENTRY" ) {
                return res.status( 409 ).json( {
                    success: false,
                    message: "El email ya está en uso por otro usuario"
                } );
            }

            res.status( 500 ).json( {
                success: false,
                message: "Error al actualizar el usuario",
                error: e.message
            } );
        }
    },

    async delete( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;

            const result = await db.delete( Users )
                .where( eq( Users.id, parseInt( id ) ) );

            if( result[ 0 ].affectedRows === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Usuario no encontrado"
                } );
            }

            res.json( {
                success: true,
                message: "Usuario eliminado exitosamente"
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al eliminar el usuario",
                error: e.message
            } );
        }
    },

    async deleteBatch( req, res ) {
        try {
            const db = getDatabase();
            const { ids } = req.body;

            if( ! ids || ! Array.isArray( ids ) || ids.length === 0 ) {
                return res.status( 400 ).json( {
                    success: false,
                    message: "Se requiere un arreglo de IDs para eliminar"
                } );
            }

            const idsNumericos = ids.map( id => parseInt( id ) );

            const result = await db.delete( Users )
                .where( inArray( Users.id, idsNumericos ) );

            res.json( {
                success: true,
                message: `${ result[ 0 ].affectedRows } usuario(s) eliminado(s) exitosamente`
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al eliminar los usuarios",
                error: e.message
            } );
        }
    }
};

module.exports = UserController;