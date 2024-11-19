/** ---JAVASCRIPT STRUCTURE---
 * 
 *      game { object }
 *      newGame()
 *      addTurn() : 
 *          # clear the player moves array
 *          # Randomly add a button ID to the currentGame array
 *          # Call showTurns() function
 *      showTurns()
 *      lightsOn()
 *      playerTurn()
 *      showScore()
 */


// const { choices } = require("yargs");    <===== added by gitpod automatically - check why

// game.js (no CommonJS, just ES6 exports)

let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };