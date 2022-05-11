$('.hamburger').on("click", function(){
  $('.black').show()
  $('.side-menu').css("right", "0");
})
$('.side-close').on("click", function(){
  $('.black').hide()
  $('.side-menu').css("right", "-80%");
})
$('.navi li a').on("click", function(){
  if ($(this).hasClass("close")) {
    $(this).children("img").attr("src", "image/toggle-open.svg")
    $(this).removeClass("close")
  } else {
    $(this).children("img").attr("src", "image/toggle-close.svg")
    $(this).addClass("close")
  }
  $(this).parent("li").children('.sub-menu').stop().toggle() //마우스를 올린거에만 작동
})