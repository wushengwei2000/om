import 'babel-polyfill';
import koa from 'koa';
import staticResource from 'koa-static';
import views from 'koa-views';
import rootRouter from './core/root';
import apiRouter from './api/apiRouter';

const app = koa();
const port = process.env.PORT || 3000;

app.use(staticResource(__dirname + '/public'));

app.use(views(__dirname + '/views', {
}));

app.use(function *(next) {
	console.log('Entering middleware ');
	yield next;
	console.log('Exiting middleware ');
});

app.use(rootRouter.routes());

app.use(apiRouter.routes());


app.listen(port);
console.log(`Server is listening at port ${port}...`);

