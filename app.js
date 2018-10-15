import Koa from 'koa'
import cors from 'koa-cors'
import Static from 'koa-static'
import path from 'path'
import views from 'koa-views'
import router from './router/router'


const app = new Koa()
app.use(cors())
app.use(Static(__dirname + '/public'))
app.use(views(path.join(__dirname + '/public'), {
    extension: 'html',
    map: {
        html: 'handlebars'
    }
}))

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('new http://localhost:3000')
})


