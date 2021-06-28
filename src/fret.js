

class Fret {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [880, 1020];
    // this.fret = fret;
    this.dim_x = 310;
    this.dim_y = 110;
    this.center = [920, 1060]
    this.hit = false;
    this.radius = 10;
  }

  distance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos[1], 2)
    );
  }

  hitNote(note) {
    centerDistance = this.distance(this.center, (note.center));
    return centerDistance < (this.radius + (note.size/2*0.8))
  };
}

export default Fret;