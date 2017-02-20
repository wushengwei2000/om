import Router from 'koa-router';

const rootRouter = Router();

rootRouter.get('/', function *() {
	console.log('Index Page is called.');
	yield this.render('index.html');
});

export default rootRouter;

