let inputElement = document.getElementById("product-name");

let inputText = document.getElementById("remaining-chars");
let maxLength = inputElement.maxLength;

function inputLength(event) {
  inputText.innerHTML = maxLength - event.target.value.length;
}

inputElement.addEventListener("input", inputLength);
