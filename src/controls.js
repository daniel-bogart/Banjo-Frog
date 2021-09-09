class Control {
  constructor() {
    this._pressed = {};
    this._renderPress = {};
    this.keys = { button1: 65, button2: 83, button3: 68, button4: 70, button5: 71}
    this.A = [876, 1000];
    this.S = [930, 1000],
    this.D = [988, 1000],
    this.F = [1062, 1000],
    this.G =  [1124, 1000]

    this.addKeyListeners();
  }

  addKeyListeners() {
    window.addEventListener('keydown', (e) => {
      this.onKeydown(e);
    });
    window.addEventListener('keyup', (e) => {
      this.onKeyup(e);
    });
  }

  Pressed(keyCode) {
    return this._pressed[keyCode];
  }

  RenderPress(keyCode) {
    return this._renderPress[keyCode];
  }

  onKeydown(e) {
    this._pressed[e.keyCode] = true;
    this._renderPress[e.keyCode] = true;
  }

  onKeyup(e) {
    delete this._renderPress[e.keyCode];
    let colTime = 288;
    setTimeout( () => {
      delete this._pressed[e.keyCode];
    }, colTime);
  }
}

export default Control;