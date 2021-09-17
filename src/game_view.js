class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  generateObjects() {
    this.game.generateNotes(this.ctx);
  }

  gameEnd() {
    console.log("HITTING 1 ----------")
    if (this.game.playStatus === "playing") {
      console.log("HITTING 2 ---------------")
      this.game.stopNotes();
      this.game.playStatus = "ending"
    }
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const gameEnd = this.gameEnd.bind(this);
    setTimeout(function () {
      generateObjects();
    }, 9 * 1000);
    setTimeout(function () {
      console.log('HITTING 3 -------------')
      gameEnd();
    }, 90 * 1000);
    requestAnimationFrame(this.animate.bind(this));
    document.getElementById('big-logo').classList.toggle("no-logo");
  }

  animate(){
    this.game.step();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }


}

export default GameView;