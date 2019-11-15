import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import ButtonJQ from './modules/ui/ButtonJQ';
import Button from './modules/ui/Button';
import Image from './modules/ui/Image';

class Main {
  constructor() {
    this.init();

    //Get App from DOM
    this.app = document.getElementById('app');

    /**Bootstrap Button */
    this.getBootstrapBtn();
    /**Material Button */
    this.getMaterialBtn();
    /**Simple Image */
    this.getBootstrapImage();
  }

  init() {
    console.log('App Initialized!');
  }

  getBootstrapBtn = () => {
    let simpleBtn = new Button('ES6 Button');
    simpleBtn.appendToElement(this.app);
  };

  getBootstrapImage = () => {
    let simpleImg = new Image('https://picsum.photos/id/1016/1920/1200');
    simpleImg.appendToElement(this.app);
  };

  getMaterialBtn = () => {
    let b = new ButtonJQ('Find Out Moe');
    b.appendToElement($('#app'));
  };
}

const main = new Main();
