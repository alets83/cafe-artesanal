const Product = require( "../models/product.model" );

exports.getProducts = async ( request, response ) => {
    
    try {
        const products = await Product.find();
        response.status( 200 ).json({
            message: "Found products",
            data: products,
            count: products.length
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Product not found...",
            error: e.message
        });
    }
}

exports.getProduct = async ( request, response ) => {
    try {
        const productId = request.params.id;
        const product = await Product.findById( productId );

        if( ! product ) {
            return response.status( 404 ).json({
                message: "Product not found...",
                data: product
            });
        }
        
        response.status( 200 ).json({
            message: "Product found..!",
            data: product
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Error Server...!",
            error: e.message
        });
    }
};

exports.createProduct = async ( request, response ) => {
    try {
        const product = new Product( request.body );
        const result = await product.save();

        console.log( request.body );
        response.status( 200 ).json( { product: result } );
    }
    catch( e ) {
        response.status( 400 ).json( { error: e } );
    }
}

// --- ACTUALIZAR PRODUCTO (UPDATE) ---
exports.updateProduct = async ( request, response ) => {
    try {
        const productId = request.body._id;
        const dataToUpdate = request.body;

        // Buscamos por ID y actualizamos con los datos del body.
        // { new: true } devuelve el producto ya modificado.
        const productUpdated = await Product.findByIdAndUpdate( productId, dataToUpdate,  
            {
                returnDocument: "after",
                runValidators: true
            } );

        if ( !productUpdated ) {
            return response.status( 404 ).json({
                message: "Product not found to update",
                data: null
            });
        }

        response.status( 200 ).json({
            message: "Product updated successfully!",
            data: productUpdated
        });
    } catch ( e ) {
        response.status( 500 ).json({
            message: "Error updating product",
            error: e.message
        });
    }
};

// --- ELIMINAR PRODUCTO (DELETE) ---
exports.deleteProduct = async ( request, response ) => {
    try {
        const productId = request.params.id;
        // Buscamos por ID y eliminamos de la base de datos.
        const productDeleted = await Product.findByIdAndDelete( productId );

        if ( !productDeleted ) {
            return response.status( 404 ).json({
                message: "Product not found to delete",
                data: null
            });
        }

        response.status( 200 ).json({
            message: "Product deleted successfully!",
            data: productDeleted
        });
    } catch ( e ) {
        response.status( 500 ).json({
            message: "Error deleting product",
            error: e.message
        });
    }
};