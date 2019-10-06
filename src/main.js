import './style.scss';
import LeftBlock from './modules/LeftBlock';

class Main {
  constructor() {
    this.app = document.querySelector('#app');

    this.listeners();
    this.init();

    this.LeftBlock = new LeftBlock();
  }

  init() {
    console.log('App Initialized!');
  }

  listeners() {
    if (this.app) {
      this.app.addEventListener('click', this.appClick);
    }
  }

  appClick(e) {
    e.target.classList.add('app-styles');
    console.log('App Was Clicked');
  }
}

const main = new Main();
