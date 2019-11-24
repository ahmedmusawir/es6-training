import './Navigation.scss';
import UIBase from './UIBase';

class Navigation extends UIBase {
  constructor(title) {
    super();
    this.title = title;
    this.links = [];
    this.linkString = '';

    // Adding Event Listener to NavLinks
    // this.wrapper = document.querySelector('.nav-wrapper');
    // this.nc = document.querySelector('.nav');

    this.init();
  }

  init = () => {
    //Init Message
    // console.log('Navigation initialized!');
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

  launchNav = (wrapper, navContent) => {
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    navContent.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.nav-close');
    close.addEventListener('click', (e) => {
      this.navAnimation(wrapper, navContent);
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'nav-wrapper') {
        this.navAnimation(wrapper, navContent);
      }
    });
  };

  navAnimation = (wrapper, navContent) => {
    navContent.style.transition = 'all .5s';
    wrapper.style.transition = 'all .5s';
    navContent.classList.add('hide');
    wrapper.classList.add('hide-bg');
    setTimeout(() => {
      wrapper.style.display = 'none';
    }, 1000);
    setTimeout(() => {
      navContent.classList.remove('hide');
      wrapper.classList.remove('hide-bg');
    }, 1500);
  };
}

export default Navigation;
