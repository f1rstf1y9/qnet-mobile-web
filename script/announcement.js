$(".check-card").on("click", function(){
  if ($(this).hasClass("checked")){
    $(this).removeClass("checked")
  } else {
    $(this).addClass("checked")
    $(".black").fadeIn();
    $(".pop-up").stop().slideDown();
  }
})

$(".black").on("click", function(){
  $(".black").fadeOut();
  $(".pop-up").stop().slideUp();
  if ($(".check-card").hasClass("checked")){
    $(".check-card").removeClass("checked")
  }
})