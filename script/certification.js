$(".check-card").on("click", function(){
  if ($(this).hasClass("checked")) {
    $(this).removeClass("checked")
    $(this).children("img").attr("src", "image/checkbox-unchecked.svg")
    if (!$(".check-card").hasClass("checked"))
      $(".next-btn").removeClass("clicked");
  } else {
    $(this).addClass("checked");
    $(this).children("img").attr("src", "image/checkbox-checked.svg");
    $(".next-btn").addClass("clicked");
    $(".next-btn").attr("href", "#");  
  }
})