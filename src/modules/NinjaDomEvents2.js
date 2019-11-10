import './NinjaDomEvents2.scss';

class NinjaDomEvents2 {
  constructor() {
    //Init Message
    console.log('NinjaDomEvents2 initialized!');

    this.copy = document.querySelector('.copy-me');
    this.box = document.querySelector('.box');

    this.setListeners();
    this.wheelHandler();
  }

  setListeners = () => {
    if (this.copy) {
      this.copy.addEventListener('copy', this.copyHandler);
    }
    if (this.box) {
      this.box.addEventListener('mousemove', this.moveHandler);
    }
  };

  copyHandler = (e) => {
    console.log('OI, it is copy protected!');
  };

  moveHandler = (e) => {
    // console.log(e.offsetX, e.offsetY);
    this.box.textContent = `x pos: ${e.offsetX} y pos: ${e.offsetY}`;
  };

  wheelHandler = (e) => {
    document.addEventListener('wheel', (e) => {
      console.log(e.pageX, e.pageY);
    });
  };
}

export default NinjaDomEvents2;
