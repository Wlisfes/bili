'use strict'

import Router from 'koa-router'
import axios from 'axios'
import fs from 'fs'
import multer from 'koa-multer'


const router = Router()

//上传配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: (req, file, cb) => {
        cb(null, 'public/upload')
    },
    //修改文件名
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split('.')
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

//加载配置
var upload = multer({ storage: storage })


router.get('/', async (ctx) => {

    await ctx.render('html/index/index')
})


//首页列表list
router.get('/ranking', async (ctx) => {
    let param = ctx.query

    let url = 'https://api.bilibili.com/x/web-interface/ranking'

    if (param.i == 3 || param.i == 4) {
        url = 'https://api.bilibili.com/x/web-interface/ranking/region'
    }

    let res = await axios.get(url, {
        params: param
    })
    ctx.body = res.data
})


router.get('/dnew', async (ctx) => {
    let param = ctx.query

    let url = 'https://comment.bilibili.com/recommendnew' + ',' + param.aid

    let res = await axios.get(url, {
        params: param
    })
    ctx.body = res.data
})



//轮播图
router.get('/loc', async (ctx) => {
    let url = 'https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695'
    let res = await axios.get(url)
    ctx.body = res.data
})

//上传图片
router.post('/upload', upload.single('file'),async (ctx) => {
    console.log(`${ctx.href}/${ctx.req.file.filename}`)
    console.log(ctx.href)
    //返回前端文件名
    ctx.body = {
        filename: `${ctx.href}/${ctx.req.file.filename}`
    }
})

module.exports = router


