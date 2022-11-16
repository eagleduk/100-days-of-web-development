let inputElement = document.getElementById("product-name");

let inputText = document.getElementById("remaining-chars");
let maxLength = inputElement.maxLength;

function inputLength(event) {
  const remainingLength = maxLength - event.target.value.length;
  inputText.innerHTML = remainingLength;
  if (remainingLength === 0) {
    inputText.classList.add("error");
    event.target.classList.add("error");
  } else if (remainingLength <= 10) {
    inputText.classList.add("warning");
    event.target.classList.add("warning");
    inputText.classList.remove("error");
    event.target.classList.remove("error");
  } else {
    inputText.classList.remove("warning");
    event.target.classList.remove("warning");
  }
}

inputElement.addEventListener("input", inputLength);
