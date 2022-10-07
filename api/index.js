/*import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa();
const router = new Router()

router.get('/',async ctx => {
    ctx.body = { ola: "Mundo"};
})

router.get('/users',async ctx => {
    ctx.body = { ola: "Mundo"};
})

.use (router.routes())
.use(router.allowedMethods());

app.listen(3000);*/

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);