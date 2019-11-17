import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import ButtonJQ from './modules/ui/ButtonJQ';
import Button from './modules/ui/Button';
import Image from './modules/ui/Image';
import PopupModal from './modules/ui/PopupModal';

class Main {
  constructor() {
    this.init();

    //Get App from DOM
    this.app = document.getElementById('app');

    /**Bootstrap Button */
    this.getBootstrapBtn();
  }

  init() {
    console.log('App Initialized!');
  }

  getBootstrapBtn = () => {
    let simpleBtn = new Button('Launch Modal');
    simpleBtn.appendToElement(this.app);
    simpleBtn.element.addEventListener('click', this.getModal);
  };

  getModal = () => {
    console.log('Launching Modal');
    let modal = new PopupModal();
    modal.appendToElement(this.app);
  };
}

const main = new Main();
