const { Router } = require( "express" );
const { usersRouter } = require( "./usersRouter" );
const { categoryRouter } = require( "./categoryRouter" );

const apiRouter = Router();

apiRouter.use( "/users", usersRouter );
apiRouter.use( "/category", categoryRouter);

module.exports = { apiRouter };