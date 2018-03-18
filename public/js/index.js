///轮播
$(function() {
  var t;
  var index = 0;
//自动播放
  t = setInterval(play, 3000)

  function play() {
    index++;
    if (index > 2) {
      index = 0
    }
    $(".carousel ul li").eq(index).css({
      "background": "#999",
    }).siblings().css({
      "background": "#fff",
    })
    $(".banner-Img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
  };

//点击鼠标 图片切换
  $(".banner ul li").click(function () {

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
      "background": "#999",
    }).siblings().css({
      "background": "#fff"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    // console.log(index);

    $(".banner-Img").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
  });

//鼠标移进  移出
  $(".carousel ul li,.banner-Img").hover(
    //鼠标移进
    function () {
      clearInterval(t)
      function play() {
        t = setInterval(play, 3000)
        index++;
        if (index > 2) {
          index = 0
        }
        $(".banner ul li").eq(index).css({
          "background": "#999",
          "border": "1px solid #ffffff"
        }).siblings().css({
          "background": "#cccccc"
        })
        $(".banner-Img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
      }
    }
  )
})