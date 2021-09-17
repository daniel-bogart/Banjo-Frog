const note1 = new Image();
note1.src = "assets/images/note1.png";
const note2 = new Image();
note2.src = "assets/images/note2.png";
const note3 = new Image();
note3.src = "assets/images/note3.png";
const note4 = new Image();
note4.src = "assets/images/note4.png";
const note5 = new Image();
note5.src = "assets/images/note5.png";
import Game from "./game";


class Note {
  constructor(ctx, type, startPos, control) {
    this.control = control;
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 40;
    this.hitRange = [730, 825];
    if (this.type === "note1") this.note = note1;
    if (this.type === "note2") this.note = note2;
    if (this.type === "note3") this.note = note3;
    if (this.type === "note4") this.note = note4;
    if (this.type === "note5") this.note = note5;
    
    if (this.startPos === "pos1") this.pos = [657, 150];
    if (this.startPos === "pos2") this.pos = [697.5, 37.5];
    if (this.startPos === "pos3") this.pos = [741, 37.5];
    if (this.startPos === "pos4") this.pos = [796.5, 37.5];
    if (this.startPos === "pos5") this.pos = [846, 37.5];
    this.vert = this.pos[0];
    // this.horiz = this.pos[1]
  }

  draw() {
    // const grad = this.ctx.createRadialGradient(
      
    // )
    this.ctx.beginPath();
    this.ctx.drawImage(
      this.note,
      this.pos[0],
      this.pos[1],
      this.size,
      this.size
    );
  }

  move() {
    this.pos[1] += 2.0;
  }

  // noteCollision() {
  //   let horiz = this.pos[1]
  //   if (this.control.isPressed(this.control.keys[this.vert]) 
  //   && (horiz > this.hitRange[0] && horiz < this.hitRange[1])){
  //     console.log("LONG LIVE OUR SOVIET MOTHERLAND BUILT BY THE PEOPLE'S MIGHT HAND")
  //   }
  // }

}

export default Note;