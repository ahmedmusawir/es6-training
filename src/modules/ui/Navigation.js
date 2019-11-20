import './Navigation.scss';
import UIBase from './UIBase';

class Navigation extends UIBase {
  constructor(title) {
    super();
    this.title = title;
    this.links = [];
    this.linkString = '';

    this.init();
  }

  init = () => {
    //Init Message
    console.log('Navigation initialized!');
  };

  addLink = (title, href) => {
    this.links.push({
      title,
      href
    });
  };

  getElementString = () => {
    this.links.forEach((link) => {
      this.linkString += `<li class="nav-item"><a class="nav-link active">${link.title}</a></li>\n`;
      // this.linkString += `<li class="nav-item"><a class="nav-link active" href="${link.href}">${link.title}</a></li>\n`;
    });

    return `
    <!-- Simple Moose Navigation -->
    <div class="nav-wrapper">
   
      <div class="nav">
        <div class="nav-title">
          <h3>${this.title}</h3>
        </div>
        <div class="nav-close">X</div>
        <ul class="nav-content">
          ${this.linkString}
        </ul>
      </div>

    </div>
    `;
  };
}

export default Navigation;
