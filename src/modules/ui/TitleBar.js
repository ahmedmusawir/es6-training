import './TitleBar.scss';
import UIBase from './UIBase';

class TitleBar extends UIBase {
  constructor(title, id = null) {
    super();
    this.title = title;
    this.id = id;
    this.styleString = '';

    this.init();
  }

  init = () => {
    //Init Message
    // console.log('TitleBar initialized!');
  };

  setStyleString = (styleString) => {
    this.setStyleString = styleString;
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap TitleBar -->
    <nav
      class="navbar  navbar-dark bg-dark"
      id="${this.id}"
    >
      <a class="navbar-brand" href="#">${this.title}</a>
      <button id="nav-btn" class="navbar-toggler" type="button"           aria-controls="navbarSupportedContent"   aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div id="page-content"><!--Pages Go Here --></div>
    `;
  };
}

export default TitleBar;
