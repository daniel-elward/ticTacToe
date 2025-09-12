//players object
const playerController = {

    createPlayer: function (name, symbol) {

        return {

            name:name,
            symbol: symbol
        }
    }
};

const playerOne = playerController.createPlayer('Dan', 'X');
const playerTwo = playerController.createPlayer('Nad', 'O');

//gameboard object
const game = {

    activeGame:[' ',' ',' ',' ',' ',' ',' ',' ',' '],
};

//gameflow
(function gameFlow() {

    let gameWon = false;
    let activePlayer = playerOne;
    let choice = 1; //placeholder

    function switchPlayer() {

        if(activePlayer === playerOne) {

            activePlayer = playerTwo;
        } else {

            activePlayer = playerOne;
        };
    };

    //store players move
    function playerChoice() {

        choice = prompt(`${activePlayer.name}'s turn 1-9 \n
                         ${game.activeGame[0]} | ${game.activeGame[1]} | ${game.activeGame[2]} \n
                         ${game.activeGame[3]} | ${game.activeGame[4]} | ${game.activeGame[5]} \n
                         ${game.activeGame[6]} | ${game.activeGame[7]} | ${game.activeGame[8]}`);

        if (game.activeGame[choice - 1] != ' ') {

            alert(`ERROR, please try again \n 
                ${game.activeGame[0]} | ${game.activeGame[1]} | ${game.activeGame[2]} \n
                ${game.activeGame[3]} | ${game.activeGame[4]} | ${game.activeGame[5]} \n
                ${game.activeGame[6]} | ${game.activeGame[7]} | ${game.activeGame[8]}`);
            playerChoice();
        };
    };

    //update gameboard with players choice
    function updateBoard() {

        game.activeGame[choice - 1] = activePlayer.symbol; // - to account for array indexing
    };

    function checkWin() {

        //after spending multiple hours trying to work through this
        //I used a youtube tutorial for help
        //credit: Bro Code.
        winState = [[0,1,2],
                    [3,4,5],
                    [6,7,8],

                    [0,3,6],
                    [1,4,7],
                    [2,5,8],

                    [0,4,8],
                    [2,4,6]];

        for (let i = 0; i < winState.length; i++) {

            const condition = winState[i];
            const cellA = game.activeGame[condition[0]];
            const cellB = game.activeGame[condition[1]];
            const cellC = game.activeGame[condition[2]];

            if (cellA === ' ' || cellB === ' ' || cellC === ' '){

                continue;
            };

            if (cellA === cellB && cellB === cellC) {

                gameWon = true;
                alert(`GAME WON \n
                    ${game.activeGame[0]} | ${game.activeGame[1]} | ${game.activeGame[2]} \n
                    ${game.activeGame[3]} | ${game.activeGame[4]} | ${game.activeGame[5]} \n
                    ${game.activeGame[6]} | ${game.activeGame[7]} | ${game.activeGame[8]}`)
                break;
            };
        };
    };

    for (let i = 0; i < 9; i++) {

        if (gameWon === true) { break; };

        playerChoice();

        updateBoard();

        switchPlayer();

        checkWin();

        console.log(`gameWon = ${gameWon}`)

        console.log(` Gameboard END of loop ${game.activeGame}`);
    };
})();