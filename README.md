# bili

#基于node koa的B站视频播放
git clone git@github.com:Wlisfes/bili.git  <br/>
npm install  <br/>
node index.js  <br/>


  
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