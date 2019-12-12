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
        <label for="exampleInputName">User ID</label>
        <input type="text" name="userId" class="form-control" id="exampleInputName" name="exampleInputName2" aria-describedby="emailHelp" placeholder="Enter Name">
        <small id="emailHelp" class="form-text text-muted">3-6 letters & digits</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        <small id="emailHelp" class="form-text text-muted">alpha numaric with any 4-8 characters </small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail">Email address</label>
        <input type="text" name="email" class="form-control" id="exampleInputEmail" placeholder="name@example.com">
        <small id="emailHelp" class="form-text text-muted">
        (all lowercase)
          <ol>1. any letter, numbers, dots and/or hypens</ol>
          <ol>2. any letter, number and/or hypens</ol>
          <ol>3. any letter</ol>
          <ol>4. a dot(.) then any letters</ol>
        
          </small>
      </div>

     
      <!-- SUBMIT BTN -->
      <button type="submit" class="btn btn-info btn-block">Submit</button>
    </form>

    `;
  };
}

export default Form;
