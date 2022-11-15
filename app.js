// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://udemy.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This is lead to google";

// 273. 자바 스크립트를 통해 새 HTML 요소 삽입

let firstParagragraph = document.querySelector("p");

firstParagragraph.append(newAnchorElement);

// 274. DOM 요소 삭제

let firstH1Element = document.querySelector("h1");

// 현재 방식
firstH1Element.remove();
// 구 방식
// firstH1Element.parentElement.removeChild(firstH1Element);

// 275. 기존 요소 이동
firstParagragraph.parentElement.append(firstParagragraph);
