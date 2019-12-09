import './Form.scss';
import UIBase from '../UIBase';

class Form extends UIBase {
  constructor(title, id = null) {
    super();
    this.title = title;
    this.id = id;

    this.init();
  }

  init = () => {
    //Init Message
    console.log('Form initialized!');
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap Form -->
    <h1>Form Validation</h1>
    <form id='the-only-form' class="pr-5">
      <div class="form-group">
        <label for="exampleInputName">Full Name</label>
        <input type="text" class="form-control" id="exampleInputName" name="exampleInputName2" aria-describedby="emailHelp" placeholder="Enter Name">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail">Email address</label>
        <input type="text" class="form-control" id="exampleInputEmail" placeholder="name@example.com">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

     
      <!-- SUBMIT BTN -->
      <button type="submit" class="btn btn-info btn-block">Submit</button>
    </form>

    `;
  };
}

export default Form;
