import Note from './note.js';
const gameBJO = new Image();
const gameBG = new Image();
const gameLOGO = new Image();
const missNote = new Audio("assets/songs/miss_note.mp3")
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
    this.dim_x = 1200;
    this.dim_y = 900;
    this.meter_x = 160;
    this.meter_y = 160;
    this.score = 0;
    this.keys = { 'KeyA': 657, 'KeyS': 697.5, 'KeyD': 741, 'KeyF': 796.5, 'KeyG': 846}
    this.notesHit = 0;
    this.currentNote = { 'KeyA': 0, 'KeyS': 0, 'KeyD': 0, 'KeyF': 0, 'KeyG': 0 }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    this.ctx.drawImage(this.gameBG, 0, 0);
    this.ctx.drawImage(this.gameBJO, 0, 0);
    this.ctx.drawImage(this.gameLOGO, 20, -120, 400, 400)
    this.drawNotes()
    this.drawBar();
    this.drawScore();
    this.drawNotesHit();
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
    this.ctx.fillText("Score: "+score, 920, 825);
  }

  drawNotesHit() {
    const notesHit = this.notesHit;
    this.ctx.font = '36px Arial';
    this.ctx.fillStyle = "gold";
    this.ctx.fillText("Notes Hit: "+notesHit, 920, 780);
  }

  
  addNote() {
    const notes = ["note1", "note2", "note3", "note4", "note5"]
    const positions = ["pos1", "pos2", "pos3", "pos4", "pos5"];
    const note = notes[Math.floor(Math.random() * Math.floor(5))]
    const pos = positions[Math.floor(Math.random() * Math.floor(5))];
    this.notes.push(new Note(this.ctx, note, pos));
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

  stopNotes() {
    clearInterval(this.noteIntervalId)
  }

  hitNote(note, e) {
      let horiz = note.pos[1]
      if (this.keys[e] === note.pos[0] && 
      (horiz > note.hitRange[0] && horiz < note.hitRange[1])) {
        return true
    }
  }

  resetCurrentNote(e) {
    const currentNote = this.currentNote
    setTimeout(() => currentNote[e] = 0, .5 * 1000);
    ;
  };

  checkNotes(e) {
    const currentNote = this.currentNote;
    console.log("CURRENT NOTE", currentNote);
    this.hitNote = this.hitNote.bind(this);
    let notes = this.notes;
    if (notes.some(note => this.hitNote(note, e)) && currentNote[e] === 0) {
      this.notesHit += 1;
      this.score += 10;
      currentNote[e] += 1;
    } else {
      this.score -= 10;
      missNote.play();
    }
  }
  
  step() {
    this.notes.forEach(note => {
      if (note) {
        note.move();
      }
    });
  }

}


export default Game;
