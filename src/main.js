import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
// import ButtonJQ from './modules/ui/ButtonJQ';
import Button from './modules/ui/Button';

class Main {
  constructor() {
    this.init();

    /**DOM Basics */
    // let b = new ButtonJQ('Find Out Moe');
    // b.appendToElement($('body'));

    // let body = document.getElementsByTagName('body')[0];
    let app = document.getElementById('app');
    let simpleBtn = new Button('ES6 Button');
    simpleBtn.appendToElement(app);
  }

  init() {
    console.log('App Initialized!');
  }
}

const main = new Main();
