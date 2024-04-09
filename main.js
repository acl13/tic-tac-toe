
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

    const players = {
   playerOne : {
        name: 'Player One',
        mark: 'X'
    },
    playerTwo : {
        name: 'Player Two',
        mark: 'O'
    }
} 

    getPlayers = () => players;
    console.log(players);
    return getPlayers;
}

Players();