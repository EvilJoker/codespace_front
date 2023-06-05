# 基本 API 
https://www.runoob.com/w3cnote/requirejs-tutorial-2.html
1. define 定义 模块
2. require 加载依赖模块（等同与 requirejs）
> 1. require(["js/a"]); 加载依赖模块
> 2. require(["js/a"],function(){ 回调函数
   alert("load finished");
})

# 加载文件
网络文件
require.config({
   paths : {
       "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
   }
})
require(["jquery","js/a"],function($){
   $(function(){
       alert("load finished");  
   })
})
1. 定义一个回调函数，第一个参数数组： 依赖。第二个函数实现

# 全局配置
1. data-main 提供全局配置每个文件都配置 config 会很麻烦。

说明：
1. 创建 main.js 文件，写入配置
2. 使用data-main 属性 <script data-main="js/main" src="js/require.js"></script>
3. 表示，加载完 requiresjs 模块后， 使用 data-main 中的配置
3. data-main 默认为根目录。 

# 加载第三方模块


