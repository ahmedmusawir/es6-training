import './Validate.scss';
class Validate {
  constructor(form) {
    this.formID = form.id;
    // console.log(this.formID);
    this.inputs = document.querySelectorAll(`#${this.formID} input`);
    // console.log(this.inputs);

    // The RegEx Object
    this.rx = {
      userId: /^[a-z\d]{3,8}$/i,
      password: /^[\w@-].{4,8}$/i,
      email: /^([a-z-_\.\d]{3,20})@([a-z-_]{3,5})\.([a-z]{3,})(\.[a-z]{2,})?$/
    };

    // Doing the Validation
    this.addingEventListeners();
  }

  addingEventListeners = () => {
    this.inputs.forEach((input) => {
      input.addEventListener('keyup', (e) => {
        this.doValidation(e.target, e.target.attributes.name.value);
      });
    });
  };

  doValidation = (field, regEx) => {
    const valid = this.rx[regEx].test(field.value);
    // console.log(valid);

    if (valid) {
      field.setAttribute('class', 'valid form-control');
    } else {
      field.setAttribute('class', 'invalid form-control');
    }

    // console.log(field.value);
    // console.log(this.rx[regEx]);
  };
}

export default Validate;
