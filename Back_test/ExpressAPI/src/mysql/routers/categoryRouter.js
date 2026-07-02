const { Router } = require( "express" );
const CategoryController = require( "../controllers/CategoryController" );

const categoryRouter = Router();

categoryRouter.get( "/", CategoryController.getAll );
categoryRouter.get( "/:id", CategoryController.getById );
categoryRouter.post( "/", CategoryController.create );
categoryRouter.put( "/:id", CategoryController.update );
categoryRouter.delete( "/batch", CategoryController.deleteBatch );
categoryRouter.delete( "/:id", CategoryController.delete );

module.exports = { categoryRouter };