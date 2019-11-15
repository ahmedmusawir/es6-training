import UIBaseJQ from './UIBaseJQ';

class ButtonJQ extends UIBaseJQ {
  constructor(title) {
    super();
    this.title = title;

    this.init();
  }

  init = () => {
    //Init Message
    console.log('ButtonJQ initialized!');
  };

  getElementString = () => {
    return `
    <!-- Accent-colored raised button with ripple -->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      ${this.title}
    </button>
    `;
  };
}

export default ButtonJQ;
