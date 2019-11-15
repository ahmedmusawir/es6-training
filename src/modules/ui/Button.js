import './Button.scss';
import UIBase from './UIBase';

class Button extends UIBase {
  constructor(title) {
    super();
    this.title = title;

    this.init();
    this.randomId = `id${Math.round(Math.random() * 1000000000)}`;
  }

  init = () => {
    //Init Message
    console.log('Button initialized!');
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap Button -->
    <button id="${this.randomId}" type="button" class="btn btn-primary btn-component">${this.title}</button>

    `;
  };
}

export default Button;
