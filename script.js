//NOTES TO SELF
//Next step: create the GUI

// game object
const gameController = {
    gameboard: [null, null, null, null, null, null, null, null, null]
};

//player factory
function createPlayer(playerName, symbol) {

    return{

        name: playerName,
        symbol: symbol,
        score: 0

    };

};

let playerOne = createPlayer("Dan", "X");
let playerTwo = createPlayer("Nad", "O");

function gameFlow() {

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]  
    ];

    let roundWon = false;
    let winner = null;
    let playerSelection = null;

    //get players selection and validation
    function getPlayerSelection() {

        playerSelection = prompt(`${currentPlayer.name} is next, make your selection between 1 and 9 \n 1 | 2 | 3 \n 4 | 5 | 6 \n 7 | 8 | 9`);

        if (playerSelection < 1 || playerSelection > 9) {
            
            alert("ERROR! Invalid selection please try again");
            getPlayerSelection();
        };


        //minus 1 because of arraying indexes
        playerSelection = playerSelection - 1;

        //checks if the players selection has already been used
        if (gameController.gameboard[playerSelection] != null) {
            
            alert("ERROR! That position has already been played");
            getPlayerSelection();
        };

        return playerSelection;
    };

    let currentPlayer = playerOne;

    function checkWin() {

        //not my code
        //taken from a google search and slightly modified

        for (let i = 0; i <= 7; i++) {
            const winCondition = winCombos[i];
            let a = gameController.gameboard[winCondition[0]];
            let b = gameController.gameboard[winCondition[1]];
            let c = gameController.gameboard[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            };

            //added != null because the defaut state was signaing a match and decaring the round as won
            if (a != null && b != null && c != null && a === b && b === c) {
                roundWon = true;

            //check which player wins
            if (a === "X" && b === "X" && c === "X") {

                console.log("Player one WINS")
                winner = "player one";
                playerOne.score ++


            } else if (a === "O" && b === "O" && c === "O") {

                console.log("Player two WINS")
                winner = "player two";
                playerTwo.score ++;

            };
                
                break
            };
        };

        return roundWon, winner;
    };

    //loop that runs the game
    for (let i = 0; i < 8; i++) {

        getPlayerSelection();

        //update (and log) array with player selection
        gameController.gameboard[playerSelection] = currentPlayer.symbol;
        console.log(gameController.gameboard)
        
        //switch current player
        const playerSwitch = (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;

        checkWin();

        console.log(`roundWon var ${roundWon}`)
        console.log(`winning player var ${winner}`)
        console.log(`Player One score is ${playerOne.score}`)
        console.log(`Player Two score is ${playerTwo.score}`)

        if (roundWon === true) {break};

    };
};

gameFlow()

