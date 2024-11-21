/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/***/ ((module) => {

eval("/** ---JAVASCRIPT STRUCTURE---\n * \n *      game { object }\n *      newGame()\n *      addTurn() : \n *          # clear the player moves array\n *          # Randomly add a button ID to the currentGame array\n *          # Call showTurns() function\n *      showTurns() :\n *          # Step through currentGame(even tho chrome can't even find the game element nevermind anything else)\n *          # Turn on the light (it won't)\n *          # Turn off the light (it won't)\n *      lightsOn()\n *      playerTurn()\n *      showScore()\n */\n\n\n// const { choices } = require(\"yargs\");    <===== added by gitpod automatically - check why\n\n\nlet game = {\n    currentGame: [],\n    playerMoves: [],\n    score: 0,\n    turnNumber: 0,\n    choices: [\"button1\", \"button2\", \"button3\", \"button4\"]\n};\n\nfunction newGame() {\n    game.currentGame = [];\n    game.playerMoves = [];\n    game.score = 0;\n    for (let circle of document.getElementsByClassName(\"circle\")) {\n        if (circle.getAttribute(\"data-listener\") !== \"true\") {\n            circle.addEventListener(\"click\", (e) => {\n                let move = e.target.getAttribute(\"id\");\n                lightsOn(move);\n                game.playerMoves.push(move);\n                playerTurn();\n            });\n            circle.setAttribute(\"data-listener\", \"true\");\n        }\n    }\n    showScore();\n    addTurn();\n}\n\nfunction addTurn() {\n    game.playerMoves = [];\n    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);\n    showTurns();\n}\n\nfunction showTurns() {\n    game.turnNumber = 0;\n    let turns = setInterval(function () {\n        lightsOn(game.currentGame[game.turnNumber]);\n        game.turnNumber++;\n        if (game.turnNumber >= game.currentGame.length) {\n            clearInterval(turns);\n        }\n    }, 800);\n}\n\nfunction playerTurn() {\n    let i = game.playerMoves.length - 1;\n    if (game.currentGame[i] === game.playerMoves[i]) {\n        if (game.currentGame.length == game.playerMoves.length) {\n            game.score++;\n            showScore();\n            addTurn();\n        }\n    }\n}\n\nfunction lightsOn(circ) {\n    document.getElementById(circ).classList.add(\"light\");\n    setTimeout(function () {\n        document.getElementById(circ).classList.remove(\"light\");\n    }, 400);\n}\n\nfunction showScore() {\n    document.getElementById(\"score\").innerText = game.score;\n}\n\nmodule.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };\n\n\n\n//# sourceURL=webpack://jest-simon-game/./scripts/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/game.js");
/******/ 	
/******/ })()
;