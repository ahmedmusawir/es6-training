import './Footer.scss';
import UIBase from './UIBase';

class Footer extends UIBase {
  constructor(title, id = null) {
    super();
    this.title = title;
    this.id = id;

    this.init();
  }

  init = () => {
    //Init Message
    // console.log('Footer initialized!');
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap Footer -->
    <nav id="${this.id}" class="navbar fixed-bottom navbar-dark bg-dark">
      <a class="navbar-brand" href="#">${this.title}</a>
    </nav>
    `;
  };
}

export default Footer;
