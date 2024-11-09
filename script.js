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

    playGame();

})

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

    // 1 = playerOne 2 = playerTwo
    let turnCounter = 1;

    (function clearGrid() {
        const a1 = document.querySelector(".a1")
        const b1 = document.querySelector(".b1")
        const c1 = document.querySelector(".c1")
        const a2 = document.querySelector(".a2")
        const b2 = document.querySelector(".b2")
        const c2 = document.querySelector(".c2")
        const a3 = document.querySelector(".a3")
        const b3 = document.querySelector(".b3")
        const c3 = document.querySelector(".c3")

        a1.innerHTML = "<p></p>";
        b1.innerHTML = "<p></p>";
        c1.innerHTML = "<p></p>";
        a2.innerHTML = "<p></p>";
        b2.innerHTML = "<p></p>";
        c2.innerHTML = "<p></p>";
        a3.innerHTML = "<p></p>";
        b3.innerHTML = "<p></p>";
        c3.innerHTML = "<p></p>";

        /*
        better way to do this??

        const gridDOM = {
            a1: document.querySelector(".a1"),
            b1: document.querySelector(".b1"),
            c1: document.querySelector(".c1"),

            a2: document.querySelector(".a2"),
            b2: document.querySelector(".b2"),
            c2: document.querySelector(".c2"),

            a3: document.querySelector(".a3"),
            b3: document.querySelector(".b3"),
            c3: document.querySelector(".c3")
        }

        gridDOM.forEach(element => {
            element.innerHTML = "<p></p>"
        }); */
    })();

    function playTurn() {
        if (turnCounter === 1) {
            const gameboardDOM = document.querySelector(".game-board");

            gameboardDOM.addEventListener("click", (e) => {
                e.target.innerHTML = `${playerOne.symbol}`;
                turnCounter = 2;
                playTurn();
            })

        } else if (turnCounter === 2) {
            const gameboardDOM = document.querySelector(".game-board");

            gameboardDOM.addEventListener("click", (e) => {
                e.target.innerHTML = `${playerTwo.symbol}`;
                turnCounter = 1;
                playTurn();
            })
        }
    } 


    //checks for a win condition
    function winCondition(){
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