import Note from './note.js';
const gameBJO = new Image();
const gameBG = new Image();
gameBG.src = "assets/images/FINAL_VERSION.png";
// gameBJO.src = "assets/images/banjoVERTthicc.png";
gameBJO.src = "assets/images/BANJOFINAL.png";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.aMeter = aMeter;
    this.notes = [];
    this.gameBG = gameBG;
    this.gameBJO = gameBJO;
    this.status = "playing";
    // this.win = win;
    // this.lose = lose;
    this.dim_x = 1600;
    this.dim_y = 1200;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    // this.ctx.fillStyle = this.
    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    this.ctx.drawImage(this.gameBG, 0, 0);
    this.ctx.drawImage(this.gameBJO, 0, 0);
    this.drawNotes()
  }

  step() {

    this.notes.forEach(note => {
      if (note) {
        note.move();
      }
    });
  }

  addNote() {
    const notes = [
      "note1",
      "note2",
      "note3",
      "note4",
      "note5"
    ]
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    const note = notes[Math.floor(Math.random() * Math.floor(4))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.notes.push(new Note(this.ctx, note, pos));
  }

  removeNote() {
    this.notes.shift();
  }

  drawNotes() {
    this.notes.forEach(note => {
      note.draw();
    });
  }

  generateNotes() {

    const addNote = this.addNote.bind(this);
    const removeNote = this.removeNote.bind(this);
    this.noteIntervalId = setInterval(function () {

      addNote();

      setTimeout(function () {
        removeNote();
      }, 24 * 1000)
    }, 800);
  };
}

export default Game;
