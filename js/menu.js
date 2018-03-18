$(function () {
  var index
  $('.li_list').hover(function () {
    index=$('.li_list').index(this);
    $(".li_list ul").hide()
    $(".li_list:eq("+index+") ul").show();
    $(".li_list>img:eq("+index+")").hide();
    var height = $('.li_list').height()
    var ImgOffsetHeight = height*index
    $('.Img').css('top',(ImgOffsetHeight+15))
  },function () {
    $(".li_list ul").hide()
    $(".li_list>img:eq("+index+")").show();
  })
})