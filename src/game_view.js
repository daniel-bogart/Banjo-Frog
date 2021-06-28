// import Game from './game';

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.Game.draw() = this.Game.draw().bind(this)
  }

  generateObjects() {
    this.game.generateNotes(this.ctx);
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    setTimeout(function () {
      generateObjects();
    }, 9 * 1000);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(){
    this.game.step();
    this.game.draw(this.ctx, this.bMeter);
    requestAnimationFrame(this.animate.bind(this));
  }


}

export default GameView;