const express = require( 'express' );
const postsController = require( '../controllers/posts.controller' );
const postsRouter = express.Router();

postsRouter.get( "/posts", postsController.getPosts );
postsRouter.get( "/posts/:id", postsController.getPost );
postsRouter.post( "/posts", postsController.createPost );
postsRouter.put("/posts", postsController.updatePost);
postsRouter.delete("/posts/:id", postsController.deletePost);

module.exports = postsRouter;