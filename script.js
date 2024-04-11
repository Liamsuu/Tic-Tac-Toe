function Player(name, p1_or_p2) {
  const playerOneSymbol = "X";
  const playerTwoSymbol = "O";

  const getPlayerOneSymbol = () => {
    return playerOneSymbol;
  };

  const getPlayerTwoSymbol = () => {
    return playerTwoSymbol;
  };

  if (p1_or_p2 === 1) {
    return { name, getPlayerOneSymbol };
  } else if (p1_or_p2 === 2) {
    return { name, getPlayerTwoSymbol };
  }
}

function Gameboard() {
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getGameboard = () => {
    return gameboard;
  };

  const updateGameboard = (position, playerObj) => {
    /// position will be a number, from 1 to 9 which will correspond to the squares on the board.
    //  playerObj will just be used to decide whether to place an X or O there based on if they are player1 or player2.
  };
  return { getGameboard, updateGameboard };
}

const liam = Player("Liam", 1);
console.log(liam.getPlayerOneSymbol());

const jack = Player("Jack", 2);
console.log(jack.getPlayerTwoSymbol());
