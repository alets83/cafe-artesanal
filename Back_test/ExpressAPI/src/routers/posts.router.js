const express = require( 'express' );
const postsController = require( '../controllers/posts.controller' );

const postsRouter = express.Router();

postsRouter.get( "/posts", postsController.getPosts );
postsRouter.get( "/posts/:id", postsController.getPost );
postsRouter.post( "/posts", postsController.createPost );

module.exports = postsRouter;