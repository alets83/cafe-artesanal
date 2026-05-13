const express = require( 'express' );
const productsController = require( '../controllers/products.controller' );
const productsRouter = express.Router();

productsRouter.get( "/products", productsController.getProducts );
productsRouter.get( "/products/:id", productsController.getProduct );
productsRouter.post( "/products", productsController.createProduct );
productsRouter.put( "/products", productsController.updateProduct );
productsRouter.delete( "/products/:id", productsController.deleteProduct );

module.exports = productsRouter;
