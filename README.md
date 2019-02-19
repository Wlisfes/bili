# bili

#基于node koa的B站视频播放
git clone git@github.com:Wlisfes/bili.git
npm install
node index.js


  
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
   babel-core
   babel-plugin-transform-runtime
   babel-preset-es2015
   babel-preset-stage-0


#  入口文件  index.js
   require('babel-core/register');
   require('./app');