import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByClassName("canvas")[0];
  canvasEl.width = 1200
  canvasEl.height = 900
  
  const ctx = canvasEl.getContext("2d");
  
  const closeModal = document.getElementById("close-modal")
  const banjofrog1 = new Audio("assets/songs/banjofrog1.mp3");
  const instructionsModal = document.getElementById("instructions-modal");
  const instructionsBtn = document.getElementById('instructions-button');
  
  instructionsBtn.addEventListener("click", () => {
    instructionsModal.classList.toggle("display-instructions-modal")
  });

  closeModal.addEventListener("click", () => {
    instructionsModal.classList.toggle("display-instructions-modal")
  })


  document.getElementById("play-button").addEventListener("click", () => {
    const game = new Game(ctx);
    new GameView(game, ctx).start();
    window.addEventListener('keyup', (e) => {
      game.checkNotes(e.code)
    });
    banjofrog1.currentTime = 0;
    banjofrog1.play();
  });

  

});


