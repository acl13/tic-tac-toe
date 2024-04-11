
(function Gameboard() {
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
})();


(function Players() {

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
    return getPlayers;
})();


(function GameController() {

    const players = getPlayers();

    let activePlayer = players[0];
        switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        }


    playTurn = () => {
        const chooseRow = prompt(`${activePlayer.name}, choose your row:  0, 1, or 2`);
        const chooseColumn = prompt(`${activePlayer.name}, choose your column: 0, 1, or 2`);

        const board = getBoard();
        const getRow = board[chooseRow];
        getRow.splice(chooseColumn, 1, activePlayer.mark);
   
        console.log(getBoard());
        switchPlayerTurn();
    }
})();
