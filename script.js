function gameBoard() {
    let gameGrid = {
        a1: null, b1: null, c1: null,
        a2: null, b2: null, c2: null,
        a3: null, b3: null, c3: null   
    };

    return gameGrid;
};

//this works to create user, do I need to improve on this??
function createUser(symbol) {
    const userName = prompt("Please enter your name");

    return {userName, symbol, score: 0};
};

/*

OLD CODDE -----

function createPlayer(playerName, symbol){

    return {
        playerName = prompt("Player, enter your name");
    }
    /*playerOne = prompt("Player 1, enter your name");
    playerTwo = prompt("Player 2, enter your name");
    
    players = {{PlayerOne: playerOne, symbol: "X", score: 0} 
               {PlayerTwo: playerTwo, symbol: "O", score: 0}}

    return players;
}

// gets players names, stored as obj.
//const playerNames = createPlayer();
*/

function playGame(){
    
    let gameDisplay = gameBoard();
    console.log(gameDisplay);

    const playerOne = createUser("X");
    const playerTwo = createUser("O");

    console.log(playerOne);
    console.log(playerTwo);

        function makeMove() {
            for(let i = 1; i <= 2; i++){

                if (i % 2 != 0) {
                    alert(`${playerOne.userName} it is your move`);

                    let playerMove = prompt(`${playerOne.userName} type your move e.g, a1, b1 etc`);

                    gameDisplay[playerMove] = playerOne.symbol;

                    //log tests
                    console.log(gameDisplay)
                    console.log(`Players move choice: ${playerMove}`)
                    console.log(`Players symbol: ${playerOne.symbol}`)
                } else {
                    alert(`${playerTwo.userName} it is your move`);

                    playerMove = prompt(`${playerTwo.userName} type your move e.g, a1, b1 etc`);

                    gameDisplay[playerMove] = playerTwo.symbol;

                    //log tests
                    console.log(gameDisplay)
                    console.log(`Players move choice: ${playerMove}`)
                    console.log(`Players symbol: ${playerTwo.symbol}`)
                } 
            }
        };

        makeMove();
};

playGame();

//console.log(players)