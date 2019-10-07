import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import LeftBlock from './modules/LeftBlock';
import RightBlock from './modules/RightBlock';

class Main {
  constructor() {
    this.app = document.querySelector('#app');

    this.listeners();
    this.init();

    this.LeftBlock = new LeftBlock();
    this.RightBlock = new RightBlock();
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
    // e.stopPropagation();
    // e.target.classList.add('app-styles');
    // console.log('App Was Clicked');
  }
}

const main = new Main();
