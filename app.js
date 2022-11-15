let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "clicked!";
  console.log("Paragraph Click");
}

paragraphElement.addEventListener("click", changeParagraphText);
