import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import NinjaDom2 from './modules/NinjaDom2';

class Main {
  constructor() {
    // this.app = document.querySelector('#app');

    this.listeners();
    this.init();

    /**DOM Basics */
    this.NinjaDom2 = new NinjaDom2();
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
