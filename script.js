//start button expand
const beginBtn = document.querySelector('.play-game');
const gameControls = document.querySelector('.game-controls');

//initialise the style rule
gameControls.style.display = "none";

beginBtn.addEventListener("click", () => {
    console.log(gameControls.style.display)

    if (gameControls.style.display === "none") {
        gameControls.style.display = "block";
        beginBtn.innerHTML = "<h2>BEGIN &uarr;</h2>";

    } else if (gameControls.style.display === "block") {
        gameControls.style.display = "none";
        beginBtn.innerHTML = "<h2>BEGIN &darr;</h2>";
    };
})

const startGame = document.querySelector(".start-game");
const scoreboard = document.querySelector(".scoreboard");

//initialise the style rule
scoreboard.style.display = "none";

startGame.addEventListener("click", (e) => {
    e.preventDefault();

    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "grid";
        //beginBtn.innerHTML = "<h2>BEGIN &uarr;</h2>";

    } else if (scoreboard.style.display === "grid") {
        scoreboard.style.display = "none";
        //beginBtn.innerHTML = "<h2>BEGIN &darr;</h2>";
    };

})

/*
WRITING CODE TO START THE GAME FROM THE HIDDEN PLAYER FORM. DISPLAY SCOREBOARD ON GAMESTART CLICK & HIDE THE ORIGINAL FORM. 

THEN LINK UP THE EXISTING GAME LOGIC TO THE GUI
*/

// IIFE example
const gameBoard = (function gameBoard() {

    const game = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    return game;
}) ();

//this works to create user, do I need to improve on this??
function createUser(symbol, turnID) {
    const name = prompt("Please enter your name");

    return {name, symbol, turnID, score: 0};
};

// runs the game, too much repeated code? specifically in playTurn()
function playGame(){

    //generate players
    const playerOne = createUser("X", 1);
    const playerTwo = createUser("O", 2);

    //logs for testing
    console.log(playerOne)
    console.log(playerTwo)

    // 1 = playerOne 2 = playerTwo
    let turnCounter = 1;

    function playTurn() {
        if (turnCounter === 1) {

            (function formatPlayerChoice() {
                playerSelection = prompt(`${playerOne.name} please make your selection \n example, [1 to 3] for row, [1 to 3] for column. '12' would be first position on row 1, second position column 2.`);

                //split user input into an array
                selectionArray = playerSelection.split(""); 

                //decrement by 1 to account for array indexes
                for (let i = 0; i < 2; i++){
                    selectionArray[i] -= 1;
                }
                return selectionArray;
            })();

            let usersSelectionIndexed = gameBoard[selectionArray[0]][selectionArray[1]];

            //let isString = typeof gameBoard

            if (typeof usersSelectionIndexed != "string"){

                gameBoard[selectionArray[0]][selectionArray[1]] = playerOne.symbol;
                turnCounter = 2;

                //display the game state
                console.log("game board display:");
                console.log(gameBoard);
            } else {
                alert("ERROR!, try again");
                playTurn()
            }

        } else if (turnCounter === 2) {

            (function formatPlayerChoice() {
                playerSelection = prompt(`${playerTwo.name} please make your selection \n example, [1 to 3] for row, [1 to 3] for column. '12' would be first position on row 1, second position column 2.`);

                //split user input into an array
                selectionArray = playerSelection.split(""); 

                //decrement by 1 to account for array indexes
                for (let i = 0; i < 2; i++){
                    selectionArray[i] -= 1;
                }
                return selectionArray;
            })();

            //console.log(selectionArray)
            //console.log(gameBoard[1][0])

            let usersSelectionIndexed = gameBoard[selectionArray[0]][selectionArray[1]];

            if (typeof usersSelectionIndexed != "string"){

                gameBoard[selectionArray[0]][selectionArray[1]] = playerTwo.symbol;
                turnCounter = 1;

                //display the game state
                console.log("game board display:");
                console.log(gameBoard);
            } else {
                alert("ERROR!, try again");
                playTurn()
            }
        }
    } 


    //checks for a win condition
    function winCondition(){
        /*
        index goes row then column
        THIS IS THE ACTUAL INDEXES
        [0,0, 0,1, 0,2],
        [1,0, 1,1, 1,2],
        [2,0, 2,1, 2,2],

        THIS IS +1 FOR HUMAN ENTRY
        [1,1, 1,2, 1,3],
        [2,1, 2,2, 2,3],
        [3,1, 3,2, 3,3],
        */

        //win condition code can't be optimal? look into ways to rewrite this later

        //check left column 
        if (gameBoard[0][0] === playerOne.symbol && gameBoard[1][0] === playerOne.symbol && gameBoard[1][0] === playerOne.symbol && gameBoard[2][0] === playerOne.symbol) {

            console.log(`${playerOne.name} wins - left column`);
            playerOne.score++;

            winner = playerOne.name
            return winner;

        } else if (gameBoard[0][0] === playerTwo.symbol && gameBoard[1][0] === playerTwo.symbol && gameBoard[1][0] === playerTwo.symbol && gameBoard[2][0] === playerTwo.symbol){
            console.log(`${playerTwo.name} wins - left column`)
            playerTwo.score++

            winner = playerTwo.name
            return winner;
            
        }

        //check right column 
        if (gameBoard[0][2] === playerOne.symbol && gameBoard[1][2] === playerOne.symbol && gameBoard[1][2] === playerOne.symbol && gameBoard[2][2] === playerOne.symbol) {
            
            console.log(`${playerOne.name} wins - right column`)
            playerOne.score++

            winner = playerOne.name
            return winner;

        } else if (gameBoard[0][2] === playerTwo.symbol && gameBoard[1][2] === playerTwo.symbol && gameBoard[1][2] === playerTwo.symbol && gameBoard[2][2] === playerTwo.symbol) {
            console.log(`${playerTwo.name} wins - right column`)
            playerTwo.score++

            winner = playerTwo.name
            return winner;
            
        }

        //check top row 
        if (gameBoard[0][0] === playerOne.symbol && gameBoard[0][1] === playerOne.symbol && gameBoard[0][1] === playerOne.symbol && gameBoard[0][2] === playerOne.symbol) {
            console.log(`${playerOne.name} wins - top row`)
            playerOne.score++

            winner = playerOne.name
            return winner;
            
        } else if (gameBoard[0][0] === playerTwo.symbol && gameBoard[0][1] === playerTwo.symbol && gameBoard[0][1] === playerTwo.symbol && gameBoard[0][2] === playerTwo.symbol) {
            console.log(`${playerTwo.name} wins - top row`)
            playerTwo.score++

            winner = playerTwo.name
            return winner;
            
        }

        //check middle row 
        if (gameBoard[1][0] === playerOne.symbol && gameBoard[1][1] === playerOne.symbol && gameBoard[1][1] === playerOne.symbol && gameBoard[1][2] === playerOne.symbol) {
            console.log(`${playerOne.name} wins - middle row`)
            playerOne.score++

            winner = playerOne.name
            return winner;
            
        } else if (gameBoard[1][0] === playerTwo.symbol && gameBoard[1][1] === playerTwo.symbol && gameBoard[1][1] === playerTwo.symbol && gameBoard[1][2] === playerTwo.symbol) {
            console.log(`${playerTwo.name} wins - middle row`)
            playerOne.score++

            winner = playerTwo.name
            return winner;
            
        }

        //check bottom row
        if (gameBoard[2][0] === playerOne.symbol && gameBoard[2][1] === playerOne.symbol && gameBoard[2][1] === playerOne.symbol && gameBoard[2][2] === playerOne.symbol) {
            console.log(`${playerOne.name} wins - bottom row`)
            playerOne.score++

            winner = playerOne.name
            return winner;
            
        } else if (gameBoard[2][0] === playerTwo.symbol && gameBoard[2][1] === playerTwo.symbol && gameBoard[2][1] === playerTwo.symbol && gameBoard[2][2] === playerTwo.symbol) {
            console.log(`${playerTwo.name} wins - bottom row`)
            playerTwo.score++

            winner = playerTwo.name
            return winner;
            
        }

        //check middle and corners
        if (gameBoard[1][1] === playerOne.symbol && gameBoard[0][2] === playerOne.symbol && gameBoard[1][1] === playerOne.symbol && gameBoard[2][0] === playerOne.symbol ||
            gameBoard[1][1] === playerOne.symbol && gameBoard[0][0] === playerOne.symbol && gameBoard[1][1] === playerOne.symbol && gameBoard[2][2] === playerOne.symbol) {
                console.log(`${playerOne.name} wins - diagonal`)
                playerOne.score++

            winner = playerOne.name
            return winner;
            
        } else if (gameBoard[1][1] === playerTwo.symbol && gameBoard[0][2] === playerTwo.symbol && gameBoard[1][1] === playerTwo.symbol && gameBoard[2][0] === playerTwo.symbol ||
            gameBoard[1][1] === playerTwo.symbol && gameBoard[0][0] === playerTwo.symbol && gameBoard[1][1] === playerTwo.symbol && gameBoard[2][2] === playerTwo.symbol) {
                console.log(`${playerTwo.name} wins - diagonal`)
                playerTwo.score++

            winner = playerTwo.name
            return winner;
            
            }

            return winner = "none";
    }

for (let i = 0; i < 9; i++){

    playTurn();
    winCondition();

    if (winner === playerOne.name || winner === playerTwo.name){
        console.log(`${playerOne.name} score is ${playerOne.score}`)
        console.log(`${playerTwo.name} score is ${playerTwo.score}`)
        break;
    }
}
};

//playGame();