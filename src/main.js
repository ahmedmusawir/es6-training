import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import NinjaDomEvents1 from './modules/NinjaDomEvents1';

class Main {
  constructor() {
    // this.app = document.querySelector('#app');

    this.listeners();
    this.init();

    /**DOM Basics */
    this.NinjaDomEvents1 = new NinjaDomEvents1();
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
    e.stopPropagation();
    e.target.classList.toggle('app-styles');
    console.log('App Was Clicked');
  }
}

const main = new Main();
