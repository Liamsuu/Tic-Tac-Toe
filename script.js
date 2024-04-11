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
  };

  const checkWinCondition = (playerObj) => {
    if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[1] === playerObj.getPlayerSymbol() &&
      gameboard[2] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[3] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[5] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[6] === playerObj.getPlayerSymbol() &&
      gameboard[7] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[3] === playerObj.getPlayerSymbol() &&
      gameboard[6] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[1] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[7] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[2] === playerObj.getPlayerSymbol() &&
      gameboard[5] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[0] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[8] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    } else if (
      gameboard[2] === playerObj.getPlayerSymbol() &&
      gameboard[4] === playerObj.getPlayerSymbol() &&
      gameboard[6] === playerObj.playerSymbol()
    ) {
      return playerObj.winnerPlayer();
    }
  };

  return { getGameboard, updateGameboard };
}

const liam = Player("Liam", 1);
