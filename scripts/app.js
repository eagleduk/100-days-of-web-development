let selectedPlayerIndex = 0;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const formElement = document.querySelector("form");

const blackGround = document.getElementById("black-ground");
const playernamePopup = document.getElementById("playerNamePopup");
const cancelPlayerName = document.getElementById("cancelPlayerName");

const player1EditButton = document.getElementById("player-1-button");
const player2EditButton = document.getElementById("player-2-button");

player1EditButton.addEventListener("click", openModalPopup);
player2EditButton.addEventListener("click", openModalPopup);

cancelPlayerName.addEventListener("click", closeModalPopup);

formElement.addEventListener("submit", confirmPlayerName);
