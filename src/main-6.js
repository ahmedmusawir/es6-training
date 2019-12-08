import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import Form from './modules/ui/form-comps/Form';

class Main {
  constructor() {
    console.log('Main Initialized!');

    //Get App from DOM
    this.app = document.getElementById('app');
    //Add Elements to the Page
    this.addUIElements();
    this.addEventListeners();
  }

  addUIElements = () => {
    const form = new Form();
    form.appendToElement(this.app);
  };

  addEventListeners = () => {
    console.log('Adding Event Listerners');
  };
}

const main = new Main();
