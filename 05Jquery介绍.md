https://www.runoob.com/bootstrap/bootstrap-intro.html

一个组件库，使用者使用 api 调用
# 总览

# bootstrap 包的结构.
1. 基本结构：Bootstrap 提供了一个带有网格系统、链接样式、背景的基本结构。这将在 Bootstrap 基本结构 部分详细讲解。
2. CSS：Bootstrap 自带以下特性：全局的 CSS 设置、定义基本的 HTML 元素样式、可扩展的 class，以及一个先进的网格系统。这将在 Bootstrap CSS 部分详细讲解。
3. 组件：Bootstrap 包含了十几个可重用的组件，用于创建图像、下拉菜单、导航、警告框、弹出框等等。这将在 布局组件 部分详细讲解。
4. JavaScript 插件：Bootstrap 包含了十几个自定义的 jQuery 插件。您可以直接包含所有的插件，也可以逐个包含这些插件。这将在 Bootstrap 插件 部分详细讲解。
5. 定制：您可以定制 Bootstrap 的组件、LESS 变量和 jQuery 插件来得到您自己的版本。

# helloword
<!DOCTYPE html>
<html>
   <head>
      <title>Bootstrap 模板</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- 引入 Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
 
      <!-- HTML5 Shiv 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
      <!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
      <!--[if lt IE 9]>
         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
         <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
   </head>
   <body>
      <h1>Hello, world!</h1>
 
      <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
      <script src="https://code.jquery.com/jquery.js"></script>
      <!-- 包括所有已编译的插件 -->
      <script src="js/bootstrap.min.js"></script>
   </body>
</html>

# css
https://www.runoob.com/bootstrap/bootstrap-css-overview.html
1. 使用 html5。 bs 使用了html5 的特性，所以 <!DOCTYPE html> 开头
2. 移动设备优先。保证友好和缩放 ： <meta name="viewport" content="width=device-width, initial-scale=1.0">
> width 设备宽度，
> initial-scale=1.0 表示 1：1 呈现，不会缩放
> user-scalable=no 进制缩放
3. 响应式图像： <img decoding="async" src="..." class="img-responsive" alt="响应式图像">
.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}
> 解决不同设备加载图片缩放问题，自动调整大小

4. 全局显示、排版和链接
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; // 设置自提
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  background-color: #ffffff;
  margin:0; 移除 边距
}
 链接样式
 排版
 5. 避免跨浏览器不一致： container 属性由 浏览器决定

 # css 详细介绍
 ## grid 网格
 https://www.runoob.com/bootstrap/bootstrap-grid-system.html
 随着屏幕 viewport 的大小而变化。让元素尽可能排列
 1. 行必须放在 .container class 中
 2. 媒体查询 @media 可以识别设备，来应同条件。比如在只在 小屏上显示图标  @media (min-width: @screen-sm-min) { ... }
 3. 基本网格结构
col-xs-6： 表示每个元素在小屏只显示 6 列（最大是12列）
 <div class="container">
   <div class="row">
      <div class="col-*-*"></div>
      <div class="col-*-*"></div>      
   </div>
   <div class="row">...</div>
</div>
<div class="container">....
4. 列重置：动态变化，当调整浏览器大小时，列数会被重置为相同的值（但不是固定值）
5. 偏移列：向右移动
6. 嵌套列：网格中嵌套网格。
7. 列排序：对元素，按照某种规则排序

## 排版
https://www.runoob.com/bootstrap/bootstrap-typography.html
<h1> 标题大小
<p class="lead"> lead, 引导文本，字体会加粗  
强调文本 <small> <strong> <em> <p class="text-left">向左对齐文本</p> 等
缩写 <abbr title="Real Simple Syndication" class="initialism">RSS</abbr>
地址 <address></address>
引用 </blockquote>
列表 

## 代码 内联代码 
<code> 代码
<pre> 独立的块元素
必须使用  &lt 和 &gt 这些变体

## 表格、表单、按钮、图片、辅助、响应式工具
1. 辅助类： 颜色背景色等
2. 响应时根据屏幕大小动态调整

