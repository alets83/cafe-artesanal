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

