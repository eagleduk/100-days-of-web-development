let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "clicked!";
  console.log("Paragraph Click");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function inputEvent(event) {
  //   let text = inputElement.value;
  //   let text = event.target.value;
  let text = event.data;
  console.log(text);
}

inputElement.addEventListener("input", inputEvent);
