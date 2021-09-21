class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  generateObjects() {
    this.game.generateNotes(this.ctx);
  }

  gameEnd() {
    this.game.stopNotes();
  }

  winCheck() {
    const score = this.game.score;
    if (score >= 900) {
        document.getElementById('win1-modal').className = 'win1-display';
    } else if (score >= 800) {
        document.getElementById('win2-modal').className = 'win2-display';
    } else if (score >= 600 && score < 800) {
        document.getElementById('lose2-modal').className = 'lose2-display';
    } else {
        document.getElementById('lose1-modal').className = 'lose1-display';
    }
  };


  cancelModal() {
    document.getElementById('win1-modal').className = 'win-check-modal';
    document.getElementById('win2-modal').className = 'win-check-modal';
    document.getElementById('lose1-modal').className = 'win-check-modal';
    document.getElementById('lose2-modal').className = 'win-check-modal';
  };

  start() {
    const cancelModal = this.cancelModal.bind(this);
    const generateObjects = this.generateObjects.bind(this);
    const gameEnd = this.gameEnd.bind(this);
    const winCheck = this.winCheck.bind(this);
    setTimeout(function () {
      cancelModal();
    }, .1 * 1000);
    setTimeout(function () {
      generateObjects();
    }, 9 * 1000);
    setTimeout(function () {
      gameEnd();
    }, 88 * 1000);
    setTimeout(function () {
      winCheck();
    }, 96 * 1000);
    requestAnimationFrame(this.animate.bind(this));
    document.getElementById('big-logo').className = "no-logo";
    document.getElementById("play-button").className = "playing menu-btns";
    document.getElementById("instructions-button").className = "playing-int menu-btns";
  }

  animate(){
    this.game.step();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }


}

export default GameView;