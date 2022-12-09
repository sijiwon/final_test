setInterval(function () {
  // animate() : 변경하고자 하는 CSS 속성을 얼마의 기간동안 처리해준다
  // 체이닝 : 메소드 호출 뒤에 메소드 호출을 추가한다!
  // $('선택요소').animate({애니메이션속성},속도,함수);
  $(document).ready(function () {
    $(".gauge1")
      .animate({ width: 1, height: 20 }, 2000, function () {})
      .animate(
        {
          width: 50,
        },
        2000,
        function () {}
      );
  });
  $(document).ready(function () {
    $(".gauge2")
      .animate({ width: 1, height: 20 }, 2000, function () {})
      .animate(
        {
          width: 50,
        },
        2000,
        function () {
          console.log("2번끝");
        }
      );
  });
  $(document).ready(function () {
    $(".gauge3")
      .animate({ width: 1, height: 20 }, 2000, function () {})
      .animate(
        {
          width: 10,
        },
        2000,
        function () {}
      );
  });
}, 2000); // 매 2초마다 반복 실행
