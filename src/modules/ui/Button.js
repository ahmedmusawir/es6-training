import './UIClasses.scss';
import UIBase from './UIBase';

class Button extends UIBase {
  constructor(title) {
    super();
    this.title = title;

    this.init();
  }

  init = () => {
    //Init Message
    console.log('Button initialized!');
  };

  getElementString = () => {
    // return 'button';
    return `
    <!-- Simple Bootstrap Button -->
    <button type="button" class="btn btn-primary">${this.title}</button>

    `;
  };
}

export default Button;
