function openModalPopup(event) {
  selectedPlayerIndex = event.target.dataset.playerIndex;
  blackGround.style.display = "block";
  playernamePopup.style.display = "block";
}

function closeModalPopup() {
  formElement.children[1].children[1].value = "";
  formElement.children[1].classList.remove("error");
  formElement.children[2].style.display = "none";

  blackGround.style.display = "none";
  playernamePopup.style.display = "none";
}

function confirmPlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPlayerName = formData.get("playerName").trim();

  if (!newPlayerName) {
    event.target.children[1].classList.add("error");
    event.target.children[2].style.display = "block";
    return;
  }

  const playerInfoElement = document.getElementById(
    `player-${selectedPlayerIndex}-info`
  );

  playerInfoElement.children[1].textContent = newPlayerName;
  players[+selectedPlayerIndex - 1].name = newPlayerName;

  closeModalPopup();
}
