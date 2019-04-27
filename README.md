# bili

```
使用nodejs代理+Vue编辑的bili    

此项目只作练习，如若侵权请联系微信：UT77243  我会第一时间删除整个项目
```
> 本项目由 [Wlisfes](https://github.com/Wlisfes) 开发，您可以随意修改、使用！！

# 如何安装与使用

```
git clone https://github.com/Wlisfes/bili.git

cd bili

npm install     安装依赖

npm run app     运行

npm run build   打包
```

# 技术栈

koa（web服务框架）  
koa-router（路由）  
axios（http请求）  


# 界面欣赏

#### iPhone6 Plus预览
![ ](https://raw.githubusercontent.com/Wlisfes/bili/master/Screenshot/1.png)
![ ](https://raw.githubusercontent.com/Wlisfes/bili/master/Screenshot/2.png)
![ ](https://raw.githubusercontent.com/Wlisfes/bili/master/Screenshot/3.png)
![ ](https://raw.githubusercontent.com/Wlisfes/bili/master/Screenshot/4.png)

## 其他说明
- 个人练手项目 不喜勿喷
- 如果您喜欢该作品，您可以点右上角 "Star" "Fork" 表示支持 谢谢！
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

  
#  配置文件 .babelrc
    {
        "presets":[
            "es2015",
            "stage-0"
       ],
        "plugins": [
            "transform-runtime",
        ]
    }


#   依赖插件
   babel-core  <br/>
   babel-plugin-transform-runtime  <br/>
   babel-preset-es2015  <br/>
   babel-preset-stage-0  <br/>


#  入口文件  index.js
   require('babel-core/register');  <br/>
   require('./app');