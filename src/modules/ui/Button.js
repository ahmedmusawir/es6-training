import './Button.scss';
import UIBase from './UIBase';

class Button extends UIBase {
  constructor(title, id = null) {
    super();
    this.title = title;
    this.id = id;
    this.styleString = '';

    this.init();
  }

  init = () => {
    //Init Message
    // console.log('Button initialized!');
  };

  setStyleString = (styleString) => {
    this.setStyleString = styleString;
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap Button -->
    <button id="${this.id}" type="button" class="btn btn-primary btn-component" style="${this.setStyleString}">${this.title}</button>

    `;
  };
}

export default Button;
