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


const { choices } = require("yargs");

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

function showScore() {
    document.getElementById("score").innerText = game.score;
};

function addTurn() {
    game.playerMoves = []; // clear playerMoves array
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]); // Randomly add a button ID to the currentGame array
    // showTurns(); // Call showTurns() function
}




module.exports = { game, newGame, showScore, addTurn };