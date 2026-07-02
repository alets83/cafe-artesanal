const { eq, inArray } = require( "drizzle-orm" );
const { getDatabase } = require( "../config/database" );
const { Category } = require( "../models/CategoryModel" );

const CategoryController = {
    async getAll( req, res ) {
        try {
            const db = getDatabase();
            const resultados = await db.select( {
                id: Category.id,
                category: Category.category,
                created_at: Category.created_at,
                updated_at: Category.updated_at
            } ).from( Category );

            res.json( {
                success: true,
                datos: resultados,
                total: resultados.length
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al obtener las categorías",
                error: e.message
            } );
        }
    },

    async getById( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;

            const result = await db.select( {
                id: Category.id,
                category: Category.category,
                created_at: Category.created_at,
                updated_at: Category.updated_at
            } )
                .from( Category )
                .where( eq( Category.id, parseInt( id ) ) );

            if( result.length === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Categoría no encontrada"
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
                message: "Error al obtener la categoría",
                error: e.message
            } );
        }
    },

    async create( req, res ) {
        try {
            const db = getDatabase();
            const { category } = req.body;

            if( ! category ) {
                return res.status( 400 ).json( {
                    success: false,
                    message: "El nombre de la categoría es obligatorio"
                } );
            }

            const result = await db.insert( Category )
                .values( {
                    category
                } );

            res.status( 201 ).json( {
                success: true,
                message: "Categoría creada exitosamente",
                datos: {
                    id: result[ 0 ].insertId,
                    category
                }
            } );
        }
        catch( e ) {
            if( e.code === "ER_DUP_ENTRY" ) {
                return res.status( 409 ).json( {
                    success: false,
                    message: "La categoría ya está registrada"
                } );
            }

            res.status( 500 ).json( {
                success: false,
                message: "Error al crear la categoría",
                error: e.message
            } );
        }
    },

    async update( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;
            const { category } = req.body;

            const dataUpdate = {};

            if( category ) dataUpdate.category = category;

            if( Object.keys( dataUpdate ).length === 0 ) {
                return res.status( 400 ).json( {
                    success: false,
                    message: "No se proporcionaron datos para actualizar"
                } );
            }

            const result = await db.update( Category )
                .set( dataUpdate )
                .where( eq( Category.id, parseInt( id ) ) );

            if( result[ 0 ].affectedRows === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Categoría no encontrada"
                } );
            }

            res.json( {
                success: true,
                message: "Categoría actualizada exitosamente"
            } );
        }
        catch( e ) {
            if( e.code === "ER_DUP_ENTRY" ) {
                return res.status( 409 ).json( {
                    success: false,
                    message: "El nombre de la categoría ya está en uso"
                } );
            }

            res.status( 500 ).json( {
                success: false,
                message: "Error al actualizar la categoría",
                error: e.message
            } );
        }
    },

    async delete( req, res ) {
        try {
            const db = getDatabase();
            const { id } = req.params;

            const result = await db.delete( Category )
                .where( eq( Category.id, parseInt( id ) ) );

            if( result[ 0 ].affectedRows === 0 ) {
                return res.status( 404 ).json( {
                    success: false,
                    message: "Categoría no encontrada"
                } );
            }

            res.json( {
                success: true,
                message: "Categoría eliminada exitosamente"
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al eliminar la categoría",
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

            const result = await db.delete( Category )
                .where( inArray( Category.id, idsNumericos ) );

            res.json( {
                success: true,
                message: `${ result[ 0 ].affectedRows } categoría(s) eliminada(s) exitosamente`
            } );
        }
        catch( e ) {
            res.status( 500 ).json( {
                success: false,
                message: "Error al eliminar las categorías",
                error: e.message
            } );
        }
    }
};

module.exports = CategoryController;