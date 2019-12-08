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

    //Get From Element from DOM
    this.theForm = document.querySelector('form');
    // console.log(this.theForm);

    //Add Event Listeners to DOM Elements
    this.addEventListeners();
  }

  addUIElements = () => {
    const form = new Form();
    form.appendToElement(this.app);
  };

  addEventListeners = () => {
    console.log('Adding Event Listerners');
    this.theForm.addEventListener('submit', this.formHandler);
  };

  formHandler = (e) => {
    // console.log('Form Submitted');
    e.preventDefault();
    console.log(this.theForm.exampleInputName.value);
  };
}

const main = new Main();
