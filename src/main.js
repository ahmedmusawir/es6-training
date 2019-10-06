import './style.scss';

class Main {
  constructor() {
    this.app = document.querySelector('#app');

    this.listeners();
    this.init();
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
