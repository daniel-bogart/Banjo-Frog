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
  const soundOn = document.getElementById('sound-on-button');
  const soundOff = document.getElementById('sound-off-button');

  soundOn.addEventListener("click", () => {
    soundOn.classList.toggle("sound-button");
    soundOff.className = "sound-off-button menu-btns";
    banjofrog1.muted = true;
  })

  soundOff.addEventListener("click", () => {
    soundOff.classList.toggle("sound-button");
    soundOn.className = "sound-on-button menu-btns";
    banjofrog1.muted = false;
  })
  
  instructionsBtn.addEventListener("click", () => {
    instructionsModal.classList.toggle("display-instructions-modal")
  });

  closeModal.addEventListener("click", () => {
    instructionsModal.classList.toggle("display-instructions-modal")
  })

  window.addEventListener('keydown', (e) => {
    document.getElementById(e.code).className = 'key-display';
  });
  window.addEventListener('keyup', (e) => {
    document.getElementById(e.code).className = 'display-key-blue';
  });



  document.getElementById("play-button").addEventListener("click", () => {
    const game = new Game(ctx);
    new GameView(game, ctx).start();
    window.addEventListener('keyup', (e) => {
      game.checkNotes(e.code);
      game.resetCurrentNote(e.code);
    });
    game.changeClass();
    banjofrog1.currentTime = 0;
    banjofrog1.play();
    soundOn.className = 'sound-on-button menu-btns'
  });

  

});


