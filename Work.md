# jQuery
###jquery项目
  到位的导航和轮播
  轮播图图片太大，会使图片变形
###二级菜单的实现
  $(function () {
    $('.li_list').on('mouseenter',function () {
      var index=$('.li_list').index(this);
      $(".li_list ul").hide()
      $(".li_list:eq("+index+") ul").show();
  })
    $('.li_list').on('mouseleave',function () {
      $(".li_list ul").hide()
    })
  })
###首页完成
  二级菜单图标的显示与隐藏
   var height = $('.li_list').height()
   var ImgOffsetHeight = height*index
   $('.Img').css('top',(ImgOffsetHeight+15))
###服务商子页面云家政写到导航 
    头部页面滚动时出现的效果，说明：
      加动画 + js动态获取头部的高度和滚动弄的高度比较，
      如果大于头部的高度，让头部显示
    代码实现：
     样式代码：
      &.showhead{
        position:fixed;
        animation: aa 0.5s;
        box-shadow: 0 0 8px 0 #7e8c8d;
        @keyframes aa{
          0%{transform:translateY(-100%)}
          100%{transform:translateY(0)}
        }
      }
     js代码：
      var $top = $('.header').height()
      $(window).scroll(function () {
        var $scrollTop = $(window).scrollTop()
        if($scrollTop>$top){
          $('.header').addClass('showhead')
        }else{
          $('.header').removeClass('showhead')
        }
      })  
    
###修改轮播图，搭建数据库，首页的头部
    轮播图用swiper插件实现
    数据库的搭建步骤：
      下载安装mongoose模块
      引入mongoose模块
      连接数据库
      监听连接状态
    模型对象的创建流程
      引入mongoose模块
      创建Schema模型对象
      暴露Model模型对象
    数据库操作流程
      连接数据库
      引入模型对象
      执行插入操作
###服务器的操作流程
###express的使用流程
   下载安装express模块
      npm i express --save
   引入express模块
      var express = require("express");
   创建app服务器
      var app = express（）
   配置静态资源
      app.use(express。static（’public‘）)
   监听服务器资源
      app.listen（3000）
###动态获取数据
   后台使用template-web.js引擎来渲染模块
   （1）、使用
      引用简洁语法的引擎版本，例如： <script src="dist/template.js"></script>  
   （2）、表达式
      {{  }} 符号包裹起来的语句则为模板的逻辑表达式。
   （3）、输出表达式
      对内容编码输出： {{content}}  
      不编码输出： {{#content}}  
      编码可以防止数据中含有 HTML 字符串，避免引起 XSS 攻击。
   （4）、条件表达式
        {{if admin}} 
         <p>admin</p> 
        {{else if code > 0}} 
         <p>master</p> 
        {{else}} 
         <p>error!</p> 
        {{/if}}  
   （5）、遍历表达式（无论数组或者对象都可以用 each 进行遍历。）
        {{each list as value index}} 
         <li>{{index}} - {{value.user}}</li> 
        {{/each}} 
   （6）、模板包含表达式  
        用于嵌入子模板。
        {{include 'template_name'}}  
        子模板默认共享当前数据，亦可以指定数据：{{include 'template_name' news_list}}  
   （7）、辅助方法
        使用template.helper(name, callback)注册公用辅助方法：
        template.helper('dateFormat', function (date, format) { 
         return value; 
        });
      模板中使用的方式： {{time | dateFormat:'yyyy-MM-dd hh:mm:ss'}}  
      支持传入参数与嵌套使用： {{time | say:'cd' | ubb | link}} 
      
###分页查询
  分页查询公式：
    分页公式： find({}).limit(10).skip((1-1)*10).exec(function(){})
                      每页查询的个数  每页起始的位置
