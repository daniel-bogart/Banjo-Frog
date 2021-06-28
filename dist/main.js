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

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Control {\n  constructor() {\n    this.pressed = {};\n    this.renderPress = {};\n    this.pos = { button1: 65, button2: 83, button3: 68, button4: 70, button5: 71}\n    this.A = [876, 1000];\n    this.S = [930, 1000],\n    this.D = [988, 1000],\n    this.F = [1062, 1000],\n    this.G =  [1124, 1000]\n\n    this.addKeyListeners();\n  }\n\n  addKeyListeners() {\n    window.addEventListener('keydown', (e) => {\n      this.onKeydown(e);\n    });\n    window.addEventListener('keyup', (e) => {\n      this.onKeyup(e);\n    });\n  }\n\n  Pressed(keyCode) {\n    return this.pressed[keyCode];\n  }\n\n  RenderPress(keyCode) {\n    return this.renderPress[keyCode];\n  }\n\n  onKeydown(e) {\n    this.pressed[e.keyCode] = true;\n    this.renderPress[e.keyCode] = true;\n  }\n\n  onKeyup(e) {\n    delete this.renderPress[e.keyCode];\n    let colTime = 288;\n    setTimeout( () => {\n      delete this.pressed[e.keyCode];\n    }, colTime);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n//# sourceURL=webpack://banjofrog/./src/controls.js?");

/***/ }),

/***/ "./src/fret.js":
/*!*********************!*\
  !*** ./src/fret.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass Fret {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [880, 1020];\n    // this.fret = fret;\n    this.dim_x = 310;\n    this.dim_y = 110;\n    this.center = [920, 1060]\n    this.hit = false;\n    this.radius = 5;\n  }\n\n  distance(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos[1], 2)\n    );\n  }\n\n  hitNote(note) {\n    centerDistance = this.distance(this.center, (note.center));\n    return centerDistance < (this.radius + (note.size/2*0.8))\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fret);\n\n//# sourceURL=webpack://banjofrog/./src/fret.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.js */ \"./src/controls.js\");\n/* harmony import */ var _fret_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fret.js */ \"./src/fret.js\");\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ \"./src/note.js\");\n\n\n\nconst gameBJO = new Image();\nconst gameBG = new Image();\ngameBG.src = \"assets/images/FINAL_VERSION.png\";\n// gameBJO.src = \"assets/images/banjoVERTthicc.png\";\ngameBJO.src = \"assets/images/BANJOFINAL.png\";\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.notes = [];\n    this.gameBG = gameBG;\n    this.gameBJO = gameBJO;\n    this.status = \"playing\";\n    this.control = new _controls_js__WEBPACK_IMPORTED_MODULE_0__.default();\n    // this.win = win;\n    // this.lose = lose;\n    this.dim_x = 1600;\n    this.dim_y = 1200;\n    this.fret = new _fret_js__WEBPACK_IMPORTED_MODULE_1__.default(ctx);\n    this.meter_x = 160;\n    this.meter_y = 160;\n    this.score = 0;\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    // this.ctx.fillStyle = this.\n    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);\n    this.ctx.drawImage(this.gameBG, 0, 0);\n    this.ctx.drawImage(this.gameBJO, 0, 0);\n    this.drawNotes()\n    this.drawBar();\n    this.drawScore();\n  }\n\n  drawBar() {\n    this.ctx.beginPath();\n    this.ctx.lineWidth = \"0\";\n    this.ctx.strokeStyle = \"gold\";\n    this.ctx.rect(880, 1020, 310, 110);\n    this.ctx.stroke();\n    this.ctx.shadowBlur = 20;\n    this.ctx.shadowColor = \"gold\";\n  }\n\n  drawNotes() {\n    this.notes.forEach(note => {\n      note.draw();\n    });\n  }\n\n  drawScore() {\n    const score = this.score;\n    this.ctx.font = '40px Arial';\n    this.ctx.fillStyle = \"gold\";\n    this.ctx.fillText(\"Notes Hit: \"+score, 8, 30);\n  }\n\n  step() {\n\n    this.notes.forEach(note => {\n      if (note) {\n        note.move();\n      }\n    });\n  }\n\n  addNote() {\n    const notes = [\"note1\", \"note2\", \"note3\", \"note4\", \"note5\"]\n    const positions = [\"pos1\", \"pos2\", \"pos3\", \"pos4\", \"pos5\"];\n    const note = notes[Math.floor(Math.random() * Math.floor(5))]\n    const pos = positions[Math.floor(Math.random() * Math.floor(5))];\n    this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, note, pos));\n    console.log(note)\n    console.log(this.notes)\n  }\n\n  removeNote() {\n    this.notes.shift();\n  }\n\n\n  generateNotes() {\n\n    const addNote = this.addNote.bind(this);\n    const removeNote = this.removeNote.bind(this);\n    this.noteIntervalId = setInterval(function () {\n\n      addNote();\n\n      setTimeout(function () {\n        removeNote();\n      }, 30 * 1000)\n    }, 800);\n  };\n\n  hitNoteCollision() {\n    const fret = this.fret;\n    const notes = this.notes;\n\n    for (let i = 0; i < notes.length; i++) {\n      const note = notes[i]\n\n      if (fret.hitNote(note)) {\n        this.score += 1;\n      }\n    }\n  }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://banjofrog/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import Game from './game';\n\nclass GameView {\n  constructor(game, ctx, bMeter) {\n    this.ctx = ctx;\n    this.game = game;\n    this.bMeter = bMeter;\n    // this.Game.draw() = this.Game.draw().bind(this)\n  }\n\n  generateObjects() {\n    this.game.generateNotes(this.ctx);\n  }\n\n  start() {\n    const generateObjects = this.generateObjects.bind(this);\n    setTimeout(function () {\n      generateObjects();\n    }, 14 * 1000);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  animate(){\n    this.game.step();\n    this.game.draw(this.ctx, this.bMeter);\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://banjofrog/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const Game = require(\"./game\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByClassName(\"canvas\")[0];\n  canvasEl.width = 1600\n  canvasEl.height = 1200\n  console.log(canvasEl);\n  \n  const ctx = canvasEl.getContext(\"2d\");\n  \n  const banjofrog1 = new Audio(\"assets/songs/banjofrog1.mp3\")\n  document.getElementById(\"play-btn\").addEventListener(\"click\", () => {\n\n    // const endPositions = [\"endPos1\", \"endPos2\"]\n    // const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];\n    \n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(ctx);\n    new _game_view__WEBPACK_IMPORTED_MODULE_1__.default(game, ctx).start();\n    banjofrog1.play();\n  });\n\n});\n\n\n\n\n//# sourceURL=webpack://banjofrog/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst note1 = new Image();\nnote1.src = \"assets/images/note1.png\";\nconst note2 = new Image();\nnote2.src = \"assets/images/note2.png\";\nconst note3 = new Image();\nnote3.src = \"assets/images/note3.png\";\nconst note4 = new Image();\nnote4.src = \"assets/images/note4.png\";\nconst note5 = new Image();\nnote5.src = \"assets/images/note5.png\";\n\n\nclass Note {\n  constructor(ctx, type, startPos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.startPos = startPos;\n    this.size = 40;\n    if (this.type === \"note1\") this.note = note1;\n    if (this.type === \"note2\") this.note = note2;\n    if (this.type === \"note3\") this.note = note3;\n    if (this.type === \"note4\") this.note = note4;\n    if (this.type === \"note5\") this.note = note5;\n\n    if (this.startPos === \"pos1\") this.pos = [876, 200];\n    if (this.startPos === \"pos2\") this.pos = [930, 50];\n    if (this.startPos === \"pos3\") this.pos = [988, 50];\n    if (this.startPos === \"pos4\") this.pos = [1062, 50];\n    if (this.startPos === \"pos5\") this.pos = [1124, 50];\n  }\n\n  draw() {\n    // const grad = this.ctx.createRadialGradient(\n      \n    // )\n    this.ctx.beginPath();\n    this.ctx.drawImage(\n      this.note,\n      this.pos[0],\n      this.pos[1],\n      this.size,\n      this.size\n    );\n  }\n\n  move() {\n    this.pos[1] += 2.4;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);\n\n//# sourceURL=webpack://banjofrog/./src/note.js?");

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