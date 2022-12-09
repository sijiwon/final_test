// 클릭하면 해당 영역으로 움직이는거
$(document).ready(function ($) {
  $("#scroll_move1").click(function (event) {
    event.preventDefault();

    $("html,body").animate({ scrollTop: $("#info").offset().top }, 500);
  });
  $("#scroll_move2").click(function (event) {
    event.preventDefault();

    $("html,body").animate({ scrollTop: $("#profil").offset().top }, 500);
  });
  $("#scroll_move3").click(function (event) {
    event.preventDefault();

    $("html,body").animate({ scrollTop: $("#project").offset().top }, 500);
  });
});
