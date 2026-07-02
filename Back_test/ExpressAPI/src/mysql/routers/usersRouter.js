const { Router } = require( "express" );
const UserController = require( "../controllers/UserController" );

const usersRouter = Router();

usersRouter.get( "/", UserController.getAll );
usersRouter.get( "/:id", UserController.getById );
usersRouter.post( "/", UserController.create );
usersRouter.put( "/:id", UserController.update );
usersRouter.delete( "/batch", UserController.deleteBatch );
usersRouter.delete( "/:id", UserController.delete );

module.exports = { usersRouter };