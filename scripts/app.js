let gameRound = 1;
let selectedPlayerIndex = 0;
let playingGame = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

let game = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let startPlayer = 0;

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

const startButton = document.getElementById("game-start-button");

startButton.addEventListener("click", gameStart);

const gameBoard = document.getElementById("game-board");

const gameActiveBoard = document.getElementById("game-active-board");
gameActiveBoard.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", selectedBoard);
});

const playerTurn = document.getElementById("player-turn");

const gameOverBoard = document.getElementById("game-over");
const gameWinner = document.getElementById("game-winner");
