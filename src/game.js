import Control from './controls.js';
import Fret from './fret.js';
import Note from './note.js';
const gameBJO = new Image();
const gameBG = new Image();
gameBG.src = "assets/images/FINAL_VERSION.png";
// gameBJO.src = "assets/images/banjoVERTthicc.png";
gameBJO.src = "assets/images/BANJOFINAL.png";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.notes = [];
    this.gameBG = gameBG;
    this.gameBJO = gameBJO;
    this.status = "playing";
    this.control = new Control();
    // this.win = win;
    // this.lose = lose;
    this.dim_x = 1600;
    this.dim_y = 1200;
    this.fret = new Fret(ctx);
    this.meter_x = 160;
    this.meter_y = 160;
    this.score = 0;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    // this.ctx.fillStyle = this.
    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    this.ctx.drawImage(this.gameBG, 0, 0);
    this.ctx.drawImage(this.gameBJO, 0, 0);
    this.drawNotes()
    this.drawBar();
    this.drawScore();
  }

  drawBar() {
    this.ctx.beginPath();
    this.ctx.lineWidth = "0";
    this.ctx.strokeStyle = "gold";
    this.ctx.rect(880, 1020, 310, 110);
    this.ctx.stroke();
    this.ctx.shadowBlur = 20;
    this.ctx.shadowColor = "gold";
  }

  drawNotes() {
    this.notes.forEach(note => {
      note.draw();
    });
  }

  drawScore() {
    const score = this.score;
    this.ctx.font = '40px Arial';
    this.ctx.fillStyle = "gold";
    this.ctx.fillText("Notes Hit: "+score, 8, 30);
  }

  step() {

    this.notes.forEach(note => {
      if (note) {
        note.move();
      }
    });
  }

  addNote() {
    const notes = ["note1", "note2", "note3", "note4", "note5"]
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    const note = notes[Math.floor(Math.random() * Math.floor(5))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.notes.push(new Note(this.ctx, note, pos));
    console.log(note)
    console.log(this.notes)
  }

  removeNote() {
    this.notes.shift();
  }


  generateNotes() {

    const addNote = this.addNote.bind(this);
    const removeNote = this.removeNote.bind(this);
    this.noteIntervalId = setInterval(function () {

      addNote();

      setTimeout(function () {
        removeNote();
      }, 30 * 1000)
    }, 800);
  };

  hitNoteCollision() {
    const fret = this.fret;
    const notes = this.notes;

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i]

      if (fret.hitNote(note)) {
        this.score += 1;
      }
    }
  }
}


export default Game;
