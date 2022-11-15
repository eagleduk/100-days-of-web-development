let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "clicked!";
  console.log("Paragraph Click");
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function inputEvent() {
  let text = inputElement.value;
  console.log(text);
}

inputElement.addEventListener("input", inputEvent);
