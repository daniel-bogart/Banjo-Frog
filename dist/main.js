/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ \"./src/note.js\");\n\nconst gameBJO = new Image();\nconst gameBG = new Image();\nconst gameLOGO = new Image();\nconst missNote = new Audio(\"assets/songs/miss_note.mp3\")\ngameBG.src = \"assets/images/FINAL_VERSION2.png\";\ngameBJO.src = \"assets/images/BANJOFINAL2.png\";\ngameLOGO.src = \"assets/images/FINAL_LOGO.png\";\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.notes = [];\n    this.gameBG = gameBG;\n    this.gameBJO = gameBJO;\n    this.gameLOGO = gameLOGO;\n    this.dim_x = 1200;\n    this.dim_y = 900;\n    this.meter_x = 160;\n    this.meter_y = 160;\n    this.score = 0;\n    this.keys = { 'KeyA': 657, 'KeyS': 697.5, 'KeyD': 741, 'KeyF': 796.5, 'KeyG': 846}\n    this.notesHit = 0;\n    this.playStatus = \"playing\";\n    this.win = \"win\";\n    this.lose = \"lose\";\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);\n    this.ctx.drawImage(this.gameBG, 0, 0);\n    this.ctx.drawImage(this.gameBJO, 0, 0);\n    this.ctx.drawImage(this.gameLOGO, 20, -120, 400, 400)\n    this.drawNotes()\n    this.drawBar();\n    this.drawScore();\n    this.drawNotesHit();\n  }\n\n\n  drawBar() {\n    this.ctx.beginPath();\n    this.ctx.lineWidth = \"0\";\n    this.ctx.strokeStyle = \"gold\";\n    this.ctx.rect(660, 765, 232.5, 82.5);\n    this.ctx.stroke();\n    this.ctx.shadowBlur = 20;\n    this.ctx.shadowColor = \"gold\";\n  }\n\n  drawNotes() {\n    this.notes.forEach(note => {\n      note.draw();\n    });\n  }\n\n  drawScore() {\n    const score = this.score;\n    this.ctx.font = '36px Arial';\n    this.ctx.fillStyle = \"gold\";\n    this.ctx.fillText(\"Score: \"+score, 920, 825);\n  }\n\n  drawNotesHit() {\n    const notesHit = this.notesHit;\n    this.ctx.font = '36px Arial';\n    this.ctx.fillStyle = \"gold\";\n    this.ctx.fillText(\"Notes Hit: \"+notesHit, 920, 780);\n  }\n\n  \n  addNote() {\n    const notes = [\"note1\", \"note2\", \"note3\", \"note4\", \"note5\"]\n    const positions = [\"pos1\", \"pos2\", \"pos3\", \"pos4\", \"pos5\"];\n    const note = notes[Math.floor(Math.random() * Math.floor(5))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(5))];\n    this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, note, pos));\n  }\n  \n  removeNote() {\n    this.notes.shift();\n  }\n  \n  \n  generateNotes() {\n    const addNote = this.addNote.bind(this);\n    const removeNote = this.removeNote.bind(this);\n    this.noteIntervalId = setInterval(function () {\n      \n      addNote();\n      \n      setTimeout(function () {\n        removeNote();\n      }, 30 * 1000)\n    }, 800);\n  };\n\n  stopNotes() {\n    clearInterval(this.noteIntervalId)\n  }\n\n  hitNote(note, e) {\n      let horiz = note.pos[1]\n      if (this.keys[e] === note.pos[0] && \n      (horiz > note.hitRange[0] && horiz < note.hitRange[1])) {\n        return true\n    }\n  }\n\n  checkNotes(e) {\n    this.hitNote = this.hitNote.bind(this);\n    let notes = this.notes;\n    if (notes.some(note => this.hitNote(note, e))) {\n      this.notesHit += 1;\n      this.score += 10;\n    } else {\n      this.score -= 5;\n      missNote.play();\n    }\n  }\n  \n  step() {\n    this.notes.forEach(note => {\n      if (note) {\n        note.move();\n      }\n    })\n  }\n\n  checkGameStatus() {\n\n  }\n\n  winGame() {\n    this.playStatus = \"gameWin\"\n  }\n\n  loseGame() {\n    this.playStatus = \"gameLose\"\n  }\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://banjofrog/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n\n  generateObjects() {\n    this.game.generateNotes(this.ctx);\n  }\n\n  gameEnd() {\n    if (this.game.playStatus === \"playing\") {\n      this.game.stopNotes();\n      this.game.playStatus = \"ending\"\n    }\n  }\n\n  start() {\n    const generateObjects = this.generateObjects.bind(this);\n    const gameEnd = this.gameEnd.bind(this);\n    setTimeout(function () {\n      generateObjects();\n    }, 9 * 1000);\n    setTimeout(function () {\n      gameEnd();\n    }, 90 * 1000);\n    requestAnimationFrame(this.animate.bind(this));\n    document.getElementById('big-logo').className = \"no-logo\";\n    document.getElementById(\"play-button\").className = \"playing menu-btns\";\n    document.getElementById(\"instructions-button\").className = \"playing-int menu-btns\";\n  }\n\n  animate(){\n    this.game.step();\n    this.game.draw(this.ctx);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://banjofrog/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByClassName(\"canvas\")[0];\n  canvasEl.width = 1200\n  canvasEl.height = 900\n  \n  const ctx = canvasEl.getContext(\"2d\");\n  \n  const closeModal = document.getElementById(\"close-modal\")\n  const banjofrog1 = new Audio(\"assets/songs/banjofrog1.mp3\");\n  const instructionsModal = document.getElementById(\"instructions-modal\");\n  const instructionsBtn = document.getElementById('instructions-button');\n  \n  instructionsBtn.addEventListener(\"click\", () => {\n    instructionsModal.classList.toggle(\"display-instructions-modal\")\n  });\n\n  closeModal.addEventListener(\"click\", () => {\n    instructionsModal.classList.toggle(\"display-instructions-modal\")\n  })\n\n\n  document.getElementById(\"play-button\").addEventListener(\"click\", () => {\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(ctx);\n    new _game_view__WEBPACK_IMPORTED_MODULE_1__.default(game, ctx).start();\n    window.addEventListener('keyup', (e) => {\n      game.checkNotes(e.code)\n    });\n    banjofrog1.currentTime = 0;\n    banjofrog1.play();\n  });\n\n  \n\n});\n\n\n\n\n//# sourceURL=webpack://banjofrog/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst note1 = new Image();\nnote1.src = \"assets/images/note1.png\";\nconst note2 = new Image();\nnote2.src = \"assets/images/note2.png\";\nconst note3 = new Image();\nnote3.src = \"assets/images/note3.png\";\nconst note4 = new Image();\nnote4.src = \"assets/images/note4.png\";\nconst note5 = new Image();\nnote5.src = \"assets/images/note5.png\";\n\n\n\nclass Note {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 40;\n    this.hitRange = [730, 825];\n    if (this.type === \"note1\") this.note = note1;\n    if (this.type === \"note2\") this.note = note2;\n    if (this.type === \"note3\") this.note = note3;\n    if (this.type === \"note4\") this.note = note4;\n    if (this.type === \"note5\") this.note = note5;\n    \n    if (this.startPos === \"pos1\") this.pos = [657, 150];\n    if (this.startPos === \"pos2\") this.pos = [697.5, 37.5];\n    if (this.startPos === \"pos3\") this.pos = [741, 37.5];\n    if (this.startPos === \"pos4\") this.pos = [796.5, 37.5];\n    if (this.startPos === \"pos5\") this.pos = [846, 37.5];\n    this.vert = this.pos[0];\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.drawImage(\n      this.note,\n      this.pos[0],\n      this.pos[1],\n      this.size,\n      this.size\n    );\n  }\n\n  move() {\n    this.pos[1] += 2.0;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);\n\n//# sourceURL=webpack://banjofrog/./src/note.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;