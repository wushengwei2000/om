import 'babel-polyfill';
import koa from 'koa';
import views from 'koa-views';

const app = koa();

app.use(views(__dirname + '/views', {
	// map: {html: 'nunjucks'}
}));

app.use(function *(next) {
	console.log('Entering middleware ');
	yield next;
	console.log('Exiting middleware ');
});

app.use(function *() {
	console.log('In controller now ....');
	this.body = 'Hello from KOA.';
	yield this.render('index.html');
});

app.listen(3000);

console.log('Server is listening at port 3000...');
