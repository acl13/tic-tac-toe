
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
        declareWinner();
    }

    declareWinner = () => {
        const displayStatus = document.getElementById('game-status');
        switch (true) {
            case (board[0][0] === activePlayer.mark && board[0][1] === activePlayer.mark && board[0][2] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break;
            case (board[1][0] === activePlayer.mark && board[1][1] === activePlayer.mark && board[1][2] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break;  
            case (board[2][0] === activePlayer.mark && board[2][1] === activePlayer.mark && board[2][2] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break; 
            case (board[0][0] === activePlayer.mark && board[1][0] === activePlayer.mark && board[2][0] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break; 
            case (board[0][1] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][1] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break;
            case (board[0][2] === activePlayer.mark && board[1][2] === activePlayer.mark && board[2][2] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break; 
            case (board[0][0] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][2] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break; 
            case (board[0][2] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][0] === activePlayer.mark):
                console.log(`${activePlayer.name} wins!`)
                break; 
            case (board[0].includes('') === false && board[1].includes('') === false && board[2].includes('') === false) :
                console.log(`It's a tie!`) 
                break;      
            default:
                switchPlayerTurn(); 
                displayStatus.textContent = `${activePlayer.name}: Your Turn`
                break;      
        }
    }

    return playTurn;

})();
