function gameStart() {
  if (!(players[0].name && players[1].name)) {
    alert("enter player names");
    return;
  }

  gameRound = 1;
  playingGame = true;
  gameOverBoard.firstElementChild.innerHTML = `You won, <span id="game-winner">PlayerName</span>`;

  gameOverBoard.style.display = "none";
  gameBoard.style.display = "block";

  for (let i = 0; i < gameActiveBoard.children.length; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;

    game[row][col] = i;
    gameActiveBoard.children[i].textContent = "";
    gameActiveBoard.children[i].classList.remove("selected");
  }

  const nowPlayer = players[startPlayer];
  playerTurn.textContent = nowPlayer.name;
}

function gameOver(name) {
  gameOverBoard.style.display = "block";
  gameWinner.textContent = name;
}

function checkGameOver() {
  // '/' 로직 검사
  if (
    game[2][0] &&
    game[1][1] &&
    game[0][2] &&
    game[2][0] === game[1][1] &&
    game[1][1] === game[0][2]
  )
    return true;

  // '\' 로직 검사
  if (
    game[0][0] &&
    game[1][1] &&
    game[2][2] &&
    game[0][0] === game[1][1] &&
    game[1][1] === game[2][2]
  )
    return true;

  // '|' 로직 검사
  if (
    (game[0][0] === game[1][0] && game[1][0] === game[2][0]) ||
    (game[0][1] === game[1][1] && game[1][1] === game[2][1]) ||
    (game[0][2] === game[1][2] && game[1][2] === game[2][2])
  )
    return true;

  // '-' 로직 검사
  if (
    (game[0][0] === game[0][1] && game[0][1] === game[0][2]) ||
    (game[1][0] === game[1][1] && game[1][1] === game[2][1]) ||
    (game[2][0] === game[2][1] && game[2][1] === game[2][2])
  )
    return true;

  return false;
}

function selectedBoard(event) {
  const nowPlayer = players[startPlayer];

  if (!playingGame || event.target.classList.contains("selected")) return;

  const boardIndex = event.target.dataset.boardIndex;
  event.target.classList.add("selected");
  event.target.textContent = nowPlayer.symbol;

  const row = Math.floor(+boardIndex / 3);
  const col = +boardIndex % 3;

  game[row][col] = nowPlayer.symbol;
  gameRound++;
  const result = checkGameOver(row, col);

  if (result) {
    gameOver(nowPlayer.name);
    playingGame = false;
  } else {
    if (gameRound === 9) {
      gameOverBoard.firstElementChild.textContent = "Draw";
      return;
    }
    startPlayer = startPlayer === 0 ? 1 : 0;
    playerTurn.textContent = players[startPlayer].name;
  }
}
