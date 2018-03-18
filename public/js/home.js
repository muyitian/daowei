$(function(){
  // 头部点击切换样式
  $('.position_item').click(function () {
    $('.position_item').removeClass('active')
    $(this).addClass('active')
  })

  // 头部下拉切换为固定定位效果
  // 1.获取滚动条到顶部的垂直高度
  $(document).scroll(function(){
    var scrollTop = $(document).scrollTop()
    console.log(scrollTop);
    // 2.获取导航条高度
    var headerHeight =  $('#header').height()
    console.log(headerHeight + '导航条高度');
    if (scrollTop >= headerHeight) {
      $('#header').css({"position":"fixed"})
    }
  })
})
