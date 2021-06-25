// const Game = require("./game");
import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1600
  canvasEl.height = 1200

  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);
  // game.animate();
  new GameView(game, ctx).start();

  document.getElementById("play-btn").addEventListener("click", () => {

    // const endPositions = ["endPos1", "endPos2"]
    // const endPos = endPositions[Math.floor(Math.random() * Math.floor(2))];
    
    const game = new Game(ctx);
    new GameView(game, ctx).start();
  });

});


