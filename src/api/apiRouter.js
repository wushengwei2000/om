import Router from 'koa-router';

const apiRouter = new Router();
const prodRouter = new Router();

prodRouter
.get('/products', function *() {
	this.body = yield [
		{
			id: 1001,
			name: 'Product 1',
			category: 'self defence'
		},
		{
			id: 1002,
			name: 'product 02',
			category: 'baby food'
		}
	];
})
.get('/product/:id', function *() {
	this.body = yield {
		id: 1002,
		name: 'product 02',
		category: 'baby food'
	};
});


apiRouter.use('/api', prodRouter.routes(), prodRouter.allowedMethods());

export default apiRouter;

