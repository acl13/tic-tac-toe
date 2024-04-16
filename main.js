
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


(function userInteractions() {
    const board = getBoard();

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');


  let boardButtons = document.querySelectorAll(".board-button");

for (i = 0; i < boardButtons.length; i++) {
    const buttons =  [
        {
           row: 0,
           column: 0 
        },
        {
            row: 0,
            column: 1 
         },
         {
            row: 0,
            column: 2 
         },
         {
            row: 1,
            column: 0 
         },
         {
            row: 1,
            column: 1 
         },
         {
            row: 1,
            column: 2 
         },
         {
            row: 2,
            column: 0 
         },
         {
            row: 2,
            column: 1 
         },
         {
            row: 2,
            column: 2 
         },
    ]
    let location = buttons[i];
    boardButtons[i].addEventListener('click', () => {
        let row = location.row;
        let column = location.column;
        playTurn(row, column);
    
    }, {once: true});
}
  
disableButtons = () => {
    for (let button of boardButtons) {
        button.disabled = true;
    }
    const replay = document.getElementById('replay');
    replay.textContent = 'Please refresh the browser to play again.'
}

    updateUserInterface = () => {
    button1.textContent = board[0][0];
    button2.textContent = board[0][1];
    button3.textContent = board[0][2];
    button4.textContent = board[1][0];
    button5.textContent = board[1][1];
    button6.textContent = board[1][2];
    button7.textContent = board[2][0];
    button8.textContent = board[2][1];
    button9.textContent = board[2][2];
    }

const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');

openModal.addEventListener('click', () =>
{
    modal.style.display = 'block';
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none';
})

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');
    const playerOneInfo = document.getElementById('player-one-info');
    const playerTwoInfo = document.getElementById('player-two-info');

    playerOneInfo.textContent = `${playerOne.value}: X`;
    playerTwoInfo.textContent = `${playerTwo.value}: O`;

    if (playerOne.value === '' || playerTwo.value === '') {
        alert('Invalid input. Please try again.')
    } else {
    playerOne.value = '';
    playerTwo.value = '';
    modal.style.display = 'none';
    }
})


    return {updateUserInterface, disableButtons};
})();


(function GameController() {

    const players = getPlayers();

    let activePlayer = players[0];
        switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        }


    playTurn = (row, column) => {

        const board = getBoard();
        const getRow = board[row];
        getRow.splice(column, 1, activePlayer.mark);
   
        console.log(getBoard());
        updateUserInterface();
        declareWinner();
    }

    declareWinner = () => {
        const displayStatus = document.getElementById('game-status');
        switch (true) {
            case (board[0][0] === activePlayer.mark && board[0][1] === activePlayer.mark && board[0][2] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break;
            case (board[1][0] === activePlayer.mark && board[1][1] === activePlayer.mark && board[1][2] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break;  
            case (board[2][0] === activePlayer.mark && board[2][1] === activePlayer.mark && board[2][2] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break; 
            case (board[0][0] === activePlayer.mark && board[1][0] === activePlayer.mark && board[2][0] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break; 
            case (board[0][1] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][1] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break;
            case (board[0][2] === activePlayer.mark && board[1][2] === activePlayer.mark && board[2][2] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break; 
            case (board[0][0] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][2] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break; 
            case (board[0][2] === activePlayer.mark && board[1][1] === activePlayer.mark && board[2][0] === activePlayer.mark):
                displayStatus.textContent = `${activePlayer.name} wins!`
                disableButtons()
                break; 
            case (board[0].includes('') === false && board[1].includes('') === false && board[2].includes('') === false) :
                console.log(`It's a tie!`) 
                displayStatus.textContent = `It's a tie!`
                disableButtons()
                break;      
            default:
                switchPlayerTurn(); 
                displayStatus.textContent = `${activePlayer.name}: Your Turn`
                break;      
        }
    }

    return playTurn;

})();
