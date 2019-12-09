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
    // console.log(this.theForm.exampleInputName.value);
    const formName = this.theForm.exampleInputName.value;
    const formPass = this.theForm.exampleInputPassword1.value;
    const formEmail = this.theForm.exampleInputEmail.value;

    // Creating a display element & adding to DOM directly by JS
    const displayBox = document.createElement('DIV');
    displayBox.classList.add(
      'display-box-styles',
      'animated',
      'zoomIn',
      'col-sm-6'
    );

    // Replacing the DisplayBox with a new one everytime Submit button is clicked
    const firstDisplayBox = document.querySelector('.display-box-styles');
    // console.log(firstDisplayBox);
    if (firstDisplayBox !== null) {
      firstDisplayBox.remove();
    }

    // Adding displayBox above the form
    this.app.appendChild(displayBox);

    // Display the input values in the DOM inside the DisplayBox
    displayBox.innerHTML = `<h4><strong>Name:</strong> ${formName}</h4>`;
    displayBox.innerHTML += `<h4><strong>Pass:</strong> ${formPass}</h4>`;
    displayBox.innerHTML += `<h4><strong>Email:</strong> ${formEmail}</h4>`;
  };
}

const main = new Main();
