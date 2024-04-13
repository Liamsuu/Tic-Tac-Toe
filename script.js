function Player(name, p1_or_p2) {
  let playerSymbol;

  const setPlayerOneSymbol = () => {
    playerSymbol = "X";
  };

  const setPlayerTwoSymbol = () => {
    playerSymbol = "O";
  };

  const getPlayerSymbol = () => {
    return playerSymbol;
  };

  const winnerPlayer = () => {
    if (playerSymbol === "X") {
      return "Player 1 wins!";
    } else if (playerSymbol === "O") {
      return "Player 2 wins!";
    }

    // just used to declare winner, helper function for gameboard. Gameboard checks if 3 symbols are there, if so just use this function to check
  };

  if (p1_or_p2 === 1) {
    setPlayerOneSymbol();
    return { name, getPlayerSymbol, winnerPlayer };
  } else if (p1_or_p2 === 2) {
    setPlayerTwoSymbol();
    return { name, getPlayerSymbol, winnerPlayer };
  }
}

function Gameboard() {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let isWon = false;

  const changeWon = () => {
    // used to reset game when reset button is clicked
    isWon = false;
  };

  const getGameboard = () => {
    return gameboard;
  };

  const resetGameboard = () => {
    for (let x = 0; x < gameboard.length; x++) {
      gameboard[x] = "";
      createVirtualGrid();
    }
  };

  const updateGameboard = (position, playerObj) => {
    /// position will be a number, from 0 to 8 which will correspond to the squares on the board.
    //  playerObj will just be used to decide whether to place an X or O there based on if they are player1 or player2.
    // maybe change getGameboard()[position] if statement to gameboard[position] if it does not work.
    if (getGameboard()[position] === playerObj.getPlayerSymbol()) {
      return "Error.";
    } else {
      getGameboard()[position] = playerObj.getPlayerSymbol();
    }
  };

  const checkForDraw = (playerObj, playerObj2) => {
    let fullBoard;
    for (let x = 0; x < getGameboard().length; x++) {
      if (getGameboard()[x] === "") {
        break;
      } else {
        fullBoard = true;
      }
      if (fullBoard === true) {
        if (
          checkWinCondition(playerObj) === false &&
          checkWinCondition(playerObj2) === false
        ) {
          return true;
        }
      }
    }
  };

  const checkWinCondition = (playerObj) => {
    if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[1] === playerObj.getPlayerSymbol() &&
      gameboard[2] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[3] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[5] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[6] === playerObj.getPlayerSymbol() &&
      gameboard[7] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[3] === playerObj.getPlayerSymbol() &&
      gameboard[6] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[1] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[7] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[2] === playerObj.getPlayerSymbol() &&
      gameboard[5] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[2] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[6] === playerObj.getPlayerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else {
      return false;
    }
  };

  const createVirtualGrid = () => {
    // used to create, and update the visual grid as moves are played.

    while (grid_wrapper.firstChild) {
      grid_wrapper.removeChild(grid_wrapper.firstChild);
    }
    // resets the visual board on each turn so new board array that is updated on each click can be displayed
    for (let x = 0; x < gameboard.length; x++) {
      const gridBox = document.createElement("div");

      gridBox.className = "grid-boxes";
      gridBox.id = x;
      gridBox.textContent = gameboard[x];
      grid_wrapper.appendChild(gridBox);

      gridBox.onclick = function () {
        if (gameboard[gridBox.id] === "" && isWon === false) {
          updateGameboard(Number(gridBox.id), trackTurn.checkTurn());
          createVirtualGrid(trackTurn);
          console.log(gameboard);

          // by here just make it check both users win conditions, and draw. use IF statements and create dom elements showing the outcome.
          if (checkWinCondition(player1) !== false) {
            const winner = document.createElement("h1");
            winner.textContent = player1.winnerPlayer();
            const scriptElement = document.querySelector("script");
            winner.id = "winner-text";
            document.body.insertBefore(winner, scriptElement);
            isWon = true;
          } else if (checkWinCondition(player2) !== false) {
            const winner = document.createElement("h1");
            winner.textContent = player2.winnerPlayer();
            const scriptElement = document.querySelector("script");
            winner.id = "winner-text";
            document.body.insertBefore(winner, scriptElement);
            isWon = true;
          }
          if (checkForDraw(player1, player2) === true) {
            const drawText = document.createElement("h1");
            drawText.textContent = "Draw!";
            const scriptElement = document.querySelector("script");
            drawText.id = "draw-text";
            document.body.insertBefore(drawText, scriptElement);
          }
        }
      };
    }
  };

  return {
    getGameboard,
    updateGameboard,
    checkWinCondition,
    checkForDraw,
    createVirtualGrid,
    resetGameboard,
    changeWon,
  };
}

function Turn(playerObj1, playerObj2) {
  let whosTurn = 1;

  const checkTurn = () => {
    if (whosTurn === 1) {
      whosTurn = 2;
      return playerObj1;
    } else {
      whosTurn = 1;
      return playerObj2;
    }
  };
  return { checkTurn };
}

const player1 = Player("Liam", 1);
const player2 = Player("John", 2);

const trackTurn = Turn(player1, player2);
// works perfectly to alternate turns.

const grid_wrapper = document.querySelector("#wrapper");
const currentGameboard = Gameboard();
currentGameboard.createVirtualGrid(trackTurn);

console.log(currentGameboard.checkWinCondition(player1));
console.log(currentGameboard.checkWinCondition(player2));

console.log(currentGameboard.checkForDraw(player1, player2));

console.log(currentGameboard.getGameboard());

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  currentGameboard.resetGameboard();
  const wonText = document.querySelector("#winner-text");
  const drawText = document.querySelector("#draw-text");
  currentGameboard.changeWon();
  if (wonText !== null) {
    wonText.remove();
  } else if (drawText !== null) {
    drawText.remove();
  }
  // write else if for draw text too when got it working.
});
