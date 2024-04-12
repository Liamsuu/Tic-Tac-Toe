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

  const getGameboard = () => {
    return gameboard;
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
          return "Draw!";
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

  const createViualGrid = () => {
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
        if (gameboard[gridBox.id] === "") {
          updateGameboard(Number(gridBox.id), trackTurn.checkTurn());
          createViualGrid(trackTurn);
          console.log(gameboard); // for testing purposes right now
        }
      };
    }
  };

  return {
    getGameboard,
    updateGameboard,
    checkWinCondition,
    checkForDraw,
    createViualGrid,
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

const liam = Player("Liam", 1);
const john = Player("John", 2);

const trackTurn = Turn(liam, john);
console.log(trackTurn.checkTurn());
// works perfectly to alternate turns.

const grid_wrapper = document.querySelector("#wrapper");
const currentGameboard = Gameboard();
currentGameboard.createViualGrid(trackTurn);

// currentGameboard.updateGameboard(0, john);
// currentGameboard.updateGameboard(1, john);
// currentGameboard.updateGameboard(2, liam);
// currentGameboard.updateGameboard(3, john);
// currentGameboard.updateGameboard(4, john);
// currentGameboard.updateGameboard(5, liam);
// currentGameboard.updateGameboard(6, liam);
// currentGameboard.updateGameboard(7, liam);
// currentGameboard.updateGameboard(8, john);

// currentGameboard.createViualGrid();
console.log(currentGameboard.checkWinCondition(liam));
console.log(currentGameboard.checkWinCondition(john));

console.log(currentGameboard.checkForDraw(john, liam));

console.log(currentGameboard.getGameboard());
