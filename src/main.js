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
    const formEmail = this.theForm.exampleInputEmail.value;
    const formRadio = this.theForm.inlineRadioOptions.value;

    const formCheckBox1 = this.theForm.inlineCheckbox1.checked;
    const formCheckBox2 = this.theForm.inlineCheckbox2.checked;
    const formCheckBox3 = this.theForm.inlineCheckbox3.checked;

    const formSelect1 = this.theForm.exampleFormControlSelect1.value;
    //Handling Multi Select Options
    const formSelect2 = this.theForm.exampleFormControlSelect2;
    // const mutliSelectOptions = Array.from(formSelect2.options);
    const mutliSelectOptions = [...formSelect2.options];

    //Handling Text Area
    const formTextArea = this.theForm.exampleFormControlTextarea1.value;

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
    // this.app.insertBefore(displayBox, this.app.childNodes[0]);
    // this.app.insertBefore(displayBox, this.app.firstChild);
    // console.dir(this.app);
    // console.log(this.app.parentElement);

    // Display the input values in the DOM inside the DisplayBox
    displayBox.innerHTML = `<h4><strong>Name:</strong> ${formName}</h4>`;
    displayBox.innerHTML += `<h4><strong>Email:</strong> ${formEmail}</h4>`;
    displayBox.innerHTML += `<h4><strong>Radio:</strong> ${formRadio}</h4>`;
    displayBox.innerHTML += `<h4><strong>CheckBox1:</strong> ${formCheckBox1}</h4>`;
    displayBox.innerHTML += `<h4><strong>CheckBox2:</strong> ${formCheckBox2}</h4>`;
    displayBox.innerHTML += `<h4><strong>CheckBox3:</strong> ${formCheckBox3}</h4>`;
    displayBox.innerHTML += `<h4><strong>Select1:</strong> ${formSelect1}</h4>`;
    // displayBox.innerHTML += `<h4><strong>Select2:</strong> ${formSelect2}</h4>`;
    mutliSelectOptions.forEach((option) => {
      // console.log(option.value);
      // console.log(option.selected);
      displayBox.innerHTML += `<h5><strong>Multi Select Value:</strong> ${option.value}</h5>`;
      displayBox.innerHTML += `<h5><strong>Multi Select Selected Status:</strong> ${option.selected}</h5>`;
    });

    displayBox.innerHTML += `<h5><strong>Text Area Value:</strong> <small>${formTextArea}</small></h5>`;
  };
}

const main = new Main();
