"use strict";
const content = "안녕하세요. 웹 퍼블리셔를 꿈꾸는 시지원입니다.";
const text = document.querySelector(".typing");
let index = 0;

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function typing() {
  text.textContent += content[index++];
  if (index > content.length) {
    text.textContent = "";
    index = 0;
    sleep(3000);
  }
}
setInterval(typing, 200);
