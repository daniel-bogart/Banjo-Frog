const note1 = new Image();
const note2 = new Image();
const note3 = new Image();
const note4 = new Image();
const note5 = new Image();
note1.src = "assets/images/note1.png";
note2.src = "assets/images/note2.png";
note3.src = "assets/images/note3.png";
note4.src = "assets/images/note4.png";
note5.src = "assets/images/note5.png";


class Note {
  constructor(ctx, type, startPos) {
  this.startPos = startPos;
  this.type = type;
  this.ctx = ctx;
  this.size = 40;
  if (this.type = "note1") this.note = note1;
  if (this.type = "note2") this.note = note2;
  if (this.type = "note3") this.note = note3;
  if (this.type = "note4") this.note = note4;
  if (this.type = "note5") this.note = note5;

  if (this.startPos === "pos1") this.pos = [876, 200];
  if (this.startPos === "pos2") this.pos = [930, 50];
  if (this.startPos === "pos3") this.pos = [988, 50];
  if (this.startPos === "pos4") this.pos = [1062, 50];
  if (this.startPos === "pos5") this.pos = [1124, 50];
  }

  draw() {
    debugger
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
    this.pos[1] += 1.5;
  }

}

export default Note;