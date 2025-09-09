//players object
const playerController = {

    createPlayer: function (name, symbol) {

        return {

            name:name,
            symbol: symbol
        }
    }
};

const PlayerOne = playerController.createPlayer('Dan', 'X');
const PlayerTwo = playerController.createPlayer('Nad', 'O');

//gameboard object
const gameboard = {

    activeGame:['-','-','-','-','-','-','-','-','-']
};

//gameflow object
(function gameFlow() {

    let gameWon = false;
    let activePlayer = PlayerOne;
    let choice = 1;

    function switchPlayer() {

        if(activePlayer === PlayerOne) {

            activePlayer = PlayerTwo;
        } else {

            activePlayer = PlayerOne;
        };
    };

    //store players move
    function playerChoice() {

        choice = prompt(`${activePlayer.name}'s turn 1-9`);
    };

    //update gameboard with players choice
    function updateBoard() {

        gameboard.activeGame[choice - 1] = activePlayer.symbol;
    };

    for (let i = 0; i < 3; i++) {

        console.log(` Gameboard START of loop ${gameboard.activeGame}`);

        playerChoice();
        console.log(`${activePlayer.name} chose ${choice}`);

        updateBoard();

        switchPlayer();
        console.log(` Gameboard END of loop ${gameboard.activeGame}`);
    };
    
    //prompt(`${PlayerOne.name}, it is your turn. 1-9`)
})();