import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByClassName("canvas")[0];
  canvasEl.width = 1200
  canvasEl.height = 900
  
  const ctx = canvasEl.getContext("2d");
  
  const banjofrog1 = new Audio("assets/songs/banjofrog1.mp3")
  document.getElementById("play-button").addEventListener("click", () => {

  
    
    const game = new Game(ctx);
    new GameView(game, ctx).start();
    window.addEventListener('keyup', (e) => {
      // game.hitNote(e.code)
      game.checkNotes(e.code)
    });
    banjofrog1.play();
  });

  

});


