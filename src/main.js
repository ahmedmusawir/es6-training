import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import Basics from './modules/Basics';

class Main {
  constructor() {
    this.app = document.querySelector('#app');

    this.listeners();
    this.init();

    /**JS Basics */
    this.Basics = new Basics();
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
    e.target.classList.add('app-styles');
    console.log('App Was Clicked');
  }
}

const main = new Main();
