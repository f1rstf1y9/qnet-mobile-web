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

$(".next-btn").on("click", function(){
  alert("예제 페이지는 자격증 선택 단계까지 구현했습니다.")
})