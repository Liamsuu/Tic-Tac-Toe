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

  return { getGameboard, updateGameboard, checkWinCondition, checkForDraw };
}

const liam = Player("Liam", 1);
const john = Player("John", 2);

const currentGameboard = Gameboard();
currentGameboard.updateGameboard(0, john);
currentGameboard.updateGameboard(1, john);
currentGameboard.updateGameboard(2, liam);
currentGameboard.updateGameboard(3, john);
currentGameboard.updateGameboard(4, john);
currentGameboard.updateGameboard(5, liam);
currentGameboard.updateGameboard(6, liam);
currentGameboard.updateGameboard(7, liam);
currentGameboard.updateGameboard(8, john);

console.log(currentGameboard.checkWinCondition(liam));
console.log(currentGameboard.checkWinCondition(john));

console.log(currentGameboard.checkForDraw(john, liam));

console.log(currentGameboard.getGameboard());
