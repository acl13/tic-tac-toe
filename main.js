
function Gameboard() {
    board = [];
    const rows = 3;
    const columns = 3;

    for (i = 0; i < rows; i++) {
        board[i] = [];
        for (j = 0; j < columns; j++) {
            const cell = "";
            board[i].push(cell);
        }
    }
    console.log(board);
    getBoard = () => board;
    return getBoard;
}

Gameboard();

function Players() {

    const players = [
        {
        name: 'Player One',
        mark: 'X'
        },
        {
        name: 'Player Two',
        mark: 'O'
        }
    ]

    getPlayers = () => players;
    console.log(players);

let activePlayer = players[0];
     switchPlayerTurn = () => {
       activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    getActivePlayer = () => activePlayer;


    return {getPlayers, getActivePlayer, switchPlayerTurn};
}

Players();