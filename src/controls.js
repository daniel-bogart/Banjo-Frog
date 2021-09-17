class Control {
  constructor() {
    this._pressed = {};
    this._renderPress = {};
    this.keys = { 657: 'KeyA', 697.5: 'KeyS', 741: 'KeyD', 796.5: 'KeyF', 846: 'KeyG'}
    // this.A = 65;
    // this.S = 83;
    // this.D = 68;
    // this.F = 70;
    // this.G =  71;
    // this.fired = false;

    // this.addKeyListeners();
  }

  // addKeyListeners() {
  //   window.addEventListener('keydown', (e) => {
  //     this.onKeydown(e);
  //   });
  //   window.addEventListener('keyup', (e) => {
  //     this.onKeyup(e);
  //   });
  // }

  isPressed(keyCode) {
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
    let colTime = 1;
    setTimeout( () => {
      delete this._pressed[e.keyCode];
    }, colTime);
  }
}

export default Control;