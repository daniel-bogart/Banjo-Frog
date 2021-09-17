import Control from './controls.js';
import Fret from './fret.js';
import Note from './note.js';
const gameBJO = new Image();
const gameBG = new Image();
const gameLOGO = new Image();
gameBG.src = "assets/images/FINAL_VERSION2.png";
gameBJO.src = "assets/images/BANJOFINAL2.png";
gameLOGO.src = "assets/images/FINAL_LOGO.png";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.notes = [];
    this.gameBG = gameBG;
    this.gameBJO = gameBJO;
    this.gameLOGO = gameLOGO;
    this.status = "playing";
    this.control = new Control();
    // this.win = win;
    // this.lose = lose;
    this.dim_x = 1200; // 1056 by 792 for future reference
    this.dim_y = 900;
    this.fret = new Fret(ctx);
    this.meter_x = 160;
    this.meter_y = 160;
    this.score = 0;
    this.keys = { 'KeyA': 657, 'KeyS': 697.5, 'KeyD': 741, 'KeyF': 796.5, 'KeyG': 846}
  }

  draw() {
    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    // this.ctx.fillStyle = this.
    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    this.ctx.drawImage(this.gameBG, 0, 0);
    this.ctx.drawImage(this.gameBJO, 0, 0);
    this.ctx.drawImage(this.gameLOGO, 20, -120, 400, 400)
    this.drawNotes()
    this.drawBar();
    this.drawScore();
  }


  drawBar() {
    this.ctx.beginPath();
    this.ctx.lineWidth = "0";
    this.ctx.strokeStyle = "gold";
    this.ctx.rect(660, 765, 232.5, 82.5);
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
    this.ctx.font = '36px Arial';
    this.ctx.fillStyle = "gold";
    this.ctx.fillText("Notes Hit: "+score, 920, 825);
  }

  
  addNote() {
    const notes = ["note1", "note2", "note3", "note4", "note5"]
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    const note = notes[Math.floor(Math.random() * Math.floor(5))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.notes.push(new Note(this.ctx, note, pos, this.control));
  }
  
  removeNote() {
    this.notes.shift();
  }
  
  
  generateNotes() {
    let score = this.score
    const addNote = this.addNote.bind(this);
    const removeNote = this.removeNote.bind(this);
    this.noteIntervalId = setInterval(function () {
      
      addNote();
      
      setTimeout(function () {
        removeNote();
      }, 30 * 1000)
    }, 800);
  };
  
  // noteCollision(e) {
  //   this.notes.forEach(note => {
  //     let horiz = note.pos[1]
  //     if (note.control.isPressed(note.control.keys[note.vert]) 
  //     // if (this.keys(e))
  //     && (horiz > note.hitRange[0] && horiz < note.hitRange[1])){
  //       console.log("SCORE!!!!!", this.score)
  //       this.score += 1;
  //       console.log("SCORE!!!!!", this.score)
  //     }     
  //   })

  // }
  hitNote(e) {
    this.notes.forEach(note => {
      let horiz = note.pos[1]
      // console.log("EE", e)
      console.log(this.keys[e])
      if (this.keys[e] === note.pos[0] && 
      (horiz > note.hitRange[0] && horiz < note.hitRange[1])) {
        console.log("SCORE!!!!!", this.score)
        this.score += 1;
        console.log("SCORE!!!!!", this.score)
      }
    })
  }

  step() {

    this.notes.forEach(note => {
      if (note) {
        note.move();
      }
    });
    
  }

  // checkKeyPressed() {
  //   this.notes.forEach(note => {

  //   })
  // }

}


export default Game;
