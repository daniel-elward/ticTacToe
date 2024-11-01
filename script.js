// IIFE example
const gameBoard = (function gameBoard() {

    const game = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
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

            if (usersSelectionIndexed === null){

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

            if (usersSelectionIndexed === null){

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
    }

    for (let i = 0; i < 2; i++){
        
        playTurn();
        //winCondition();
        //console.log(x) 
    }


};

playGame();