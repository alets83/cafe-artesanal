const Post = require( "../models/post.model" );

let postsData = [
    {
        id: 1,
        title: "Excelente café latte",
        content: "El mejor café latte que he probado. Suave, bien balanceado y a la temperatura perfecta.",
        date: "2025-03-10",
        time: "10:30:00",
        products: [ "Café Latte" ]
    },
    {
        id: 2,
        title: "Pastel de chocolate increíble",
        content: "Muy húmedo y con un sabor intenso a chocolate. La cobertura no es empalagosa.",
        date: "2025-03-12",
        time: "15:45:00",
        products: [ "Pastel de Chocolate" ]
    },
    {
        id: 3,
        title: "Jugo verde refrescante",
        content: "Perfecto después del ejercicio. Se nota que usan ingredientes frescos.",
        date: "2025-03-14",
        time: "09:15:00",
        products: [ "Jugo Verde" ]
    },
    {
        id: 4,
        title: "Capuchino con mucha espuma",
        content: "Me encantó la espuma, pero el café estaba un poco amargo para mi gusto.",
        date: "2025-03-11",
        time: "11:20:00",
        products: [ "Capuchino" ]
    },
    {
        id: 5,
        title: "Cheesecake de fresa delicioso",
        content: "La fresa natural le da un toque fresco. La base crujiente perfecta.",
        date: "2025-03-13",
        time: "17:00:00",
        products: [ "Cheesecake de Fresa" ]
    },
    {
        id: 6,
        title: "Jugo de naranja muy natural",
        content: "Realmente recién exprimido. Sin azúcar añadido, tal como me gusta.",
        date: "2025-03-15",
        time: "08:30:00",
        products: [ "Jugo de Naranja" ]
    },
    {
        id: 7,
        title: "Caramel Macchiato espectacular",
        content: "Dulce en su punto justo. El toque de caramelo combina muy bien con el espresso.",
        date: "2025-03-09",
        time: "16:10:00",
        products: [ "Caramel Macchiato" ]
    },
    {
        id: 8,
        title: "Tarta de limón muy ácida",
        content: "El sabor a limón era demasiado fuerte para mí, pero el merengue estaba bien hecho.",
        date: "2025-03-14",
        time: "12:45:00",
        products: [ "Tarta de Limón" ]
    },
    {
        id: 9,
        title: "Combinación de jugos",
        content: "Pedí el jugo de piña con menta y me sorprendió gratamente. Muy refrescante.",
        date: "2025-03-12",
        time: "14:20:00",
        products: [ "Jugo de Piña y Menta" ]
    },
    {
        id: 10,
        title: "Buena atención y calidad",
        content: "Probé el café latte y el pastel de chocolate. Ambos excelentes. Volveré.",
        date: "2025-03-16",
        time: "10:05:00",
        products: [ "Café Latte", "Pastel de Chocolate" ]
    }
];

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