$(".first > .small-check-btn").on("click", function(){
  if ($(".first > .small-check-btn").hasClass("checked")) {
    $(this).removeClass("checked")
    $(this).children("img").attr("src", "image/checkbox-unchecked.svg")
    if (! $(".first > .small-check-btn").hasClass("checked") && $(".second > .small-check-btn").hasClass("checked")){
      $(".next-btn.right").removeClass("clicked");
      $(".next-btn.right").attr("href", "#");
    }
  } else {
    $(this).addClass("checked")
    $(this).children("img").attr("src", "image/checkbox-checked.svg")
    if ($(".first .small-check-btn").hasClass("checked") && $(".second > .small-check-btn").hasClass("checked")){
      $(".next-btn.right").addClass("clicked");
      $(".next-btn.right").attr("href", "#");  
    }
  }
})
$(".second > .small-check-btn").on("click", function(){
  if ($(".second > .small-check-btn").hasClass("checked")) {
    $(this).removeClass("checked")
    $(this).children("img").attr("src", "image/checkbox-unchecked.svg")
    if (! ($(".first > .small-check-btn").hasClass("checked") && $(".second > .small-check-btn").hasClass("checked"))){
      $(".next-btn.right").removeClass("clicked");
      $(".next-btn.right").attr("href", "#");
    }
  } else {
    $(this).addClass("checked")
    $(this).children("img").attr("src", "image/checkbox-checked.svg")
    if ($(".first .small-check-btn").hasClass("checked") && $(".second > .small-check-btn").hasClass("checked")){
      $(".next-btn.right").addClass("clicked");
      $(".next-btn.right").attr("href", "#"); 
    }
  }
})

$("a.next-btn.right").on("click", function(){
  alert('예제 페이지는 응시 유형 단계까지 구현하였습니다.')
})