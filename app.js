import koa from 'koa';

const app = koa();

app.use(function *(next) {
	console.log('Entering middleware ');
	yield next;
	console.log('Exiting middleware ');
});

app.use(function *() {
	this.body = 'Hello from KOA.';
});

app.listen(3000);

console.log('Server is listening at port 3000');
