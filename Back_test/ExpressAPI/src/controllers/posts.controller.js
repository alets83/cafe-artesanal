const Post = require( "../models/post.model" );

exports.getPosts = async ( request, response ) => {
        try {
        const posts = await Post.find();
        response.status( 200 ).json({
            message: "Found posts",
            data: posts,
            count: posts.length
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Posts not found...",
            error: e.message
        });
    }
}

exports.getPost = async ( request, response ) => {
    try {
        const postId = request.params.id;
        const post = await Post.findById( postId );

        if( ! post ) {
            return response.status( 404 ).json({
                message: "Post not found...",
                data: post
                // data: null
            });
        }
        
        response.status( 200 ).json({
            message: "Post found..!",
            data: post
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Error Server...!",
            error: e.message
        });
    }
};

exports.createPost = async ( request, response ) => {
    try {
        const post = new Post( request.body );
        const result = await post.save();

        console.log( request.body );
        response.status( 200 ).json( { post: result } );
    }
    catch( e ) {
        response.status( 400 ).json( { error: e } );
    }
}

// --- ACTUALIZAR UN POST (UPDATE) ---
exports.updatePost = async ( request, response ) => {
    try {
        const postId = request.body._id;
        const dataToUpdate = request.body;
        // findByIdAndUpdate recibe: el ID, los nuevos datos, y un objeto de opciones
        // { new: true } sirve para que la función devuelva el post ya actualizado y no el viejo
        const postUpdated = await Post.findByIdAndUpdate( postId, dataToUpdate, 
            {
                returnDocument: "after",
                runValidators: true
            } );

        if ( !postUpdated ) {
            return response.status( 404 ).json({ message: "Post no encontrado para actualizar" });
        }

        response.status( 200 ).json({
            message: "Post updated successfully!",
            data: postUpdated
        });
    } catch ( e ) {
        response.status( 500 ).json({
            message: "Error updating post",
            error: e.message
        });
    }
};

// --- ELIMINAR UN POST (DELETE) ---
exports.deletePost = async ( request, response ) => {
    try {
        const postId = request.params.id;        
        // Busca el post por ID y lo borra de la base de datos
        const postDeleted = await Post.findByIdAndDelete( postId );

        if ( !postDeleted ) {
            return response.status( 404 ).json({ message: "Post not found to delete" });
        }

        response.status( 200 ).json({
            message: "Post deleted successfully!",
            data: postDeleted
        });
    } catch ( e ) {
        response.status( 500 ).json({
            message: "Error deleting post",
            error: e.message
        });
    }
};