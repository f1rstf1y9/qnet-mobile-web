$(".notice-list > li").on("click", function(){
  $(this).children(".notice-cont").stop().slideToggle()
})

$(".check-btn").on("click", function(){
  if ($(".next-btn").hasClass("clicked")) {
    $(this).removeClass("clicked");
    $(".next-btn").removeClass("clicked");
    $(".next-btn").attr("href", "#");
    $(this).children("img").attr("src", "image/checkbox-unchecked.svg")
  } else {
    $(this).addClass("clicked");
    $(".next-btn").addClass("clicked");
    $(".next-btn").attr("href", "apply-01.html");
    $(this).children("img").attr("src", "image/checkbox-checked.svg")
  }
})




$(".check-card").on("click", function(){
  if ($(".check-card").hasClass("checked")) {
    $(this).removeClass("checked")
    if (! ($(".small-check-btn").hasClass("checked") && $(".check-card").hasClass("checked"))){
      $(".next-btn.right").removeClass("clicked");
      $(".next-btn.right").attr("href", "#"); 
    }
  } else {
    $(this).addClass("checked")
    if ($(".small-check-btn").hasClass("checked") && $(".check-card").hasClass("checked")){
      $(".next-btn.right").addClass("clicked");
      $(".next-btn.right").attr("href", "apply-02.html");  
    }
  }
})

$(".small-check-btn").on("click", function(){
  if ($(".small-check-btn").hasClass("checked")) {
    $(this).removeClass("checked")
    $(this).children("img").attr("src", "image/checkbox-unchecked.svg")
    if (! $(".small-check-btn").hasClass("checked") && $(".check-card").hasClass("checked")){
      $(".next-btn.right").removeClass("clicked");
      $(".next-btn.right").attr("href", "#");
    }
  } else {
    $(this).addClass("checked")
    $(this).children("img").attr("src", "image/checkbox-checked.svg")
    if ($(".small-check-btn").hasClass("checked") && $(".check-card").hasClass("checked")){
      $(".next-btn.right").addClass("clicked");
      $(".next-btn.right").attr("href", "apply-02.html");  
    }
  }
})