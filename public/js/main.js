$(function () {
  var navTil = $('.navtit ul>li')
  navTil.on('click', function () {
    $(this).addClass('active').siblings().removeClass()
    console.log(this)
  })
})