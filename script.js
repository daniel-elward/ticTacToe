// game object
const gameController = {
    gameboard: [null, null, null, null, null, null, null, null, null]
}

//player object 
const playerController = {

    playerOne: {
        name: "player one",
        symbol: "X",
        score: 0
    },

    playerTwo: {
        name: "player two",
        symbol: "O",
        score: 0
    }
}

function gameFlow() {

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

    let currentPlayer = playerController.playerOne;

    for (let i = 0; i < 5; i++) {

        getPlayerSelection();

        //update (and log) array with player selection .. need logic to validate player choice
        gameController.gameboard[playerSelection] = currentPlayer.symbol;
    
        console.log(gameController.gameboard)
        
        //switch current player
        const playerSwitch = (currentPlayer === playerController.playerOne) ? currentPlayer = playerController.playerTwo : currentPlayer = playerController.playerOne;
    }
}

gameFlow()

