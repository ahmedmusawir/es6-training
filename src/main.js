import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import Button from './modules/ui/Button';
import Navigation from './modules/ui/Navigation';

class Main {
  constructor() {
    console.log('App Initialized!');

    //Get App from DOM
    this.app = document.getElementById('app');
    //Add Elements to the Page
    this.addUIElements();
  }

  addUIElements = () => {
    //NAV LAUNCH BUTTON
    const navBtn = new Button('Launch Nav');
    navBtn.appendToElement(this.app);
    navBtn.element.addEventListener('click', this.launchNav);

    //NAV TITLE
    const nav = new Navigation('The Application');
    //NAV LINKS
    nav.addLinks('Home', '#');
    nav.addLinks('About', '#');
    nav.addLinks('Service', '#');
    nav.addLinks('Contact', '#');
    //ADDING NAV TO APP
    nav.appendToElement(this.app);
  };

  launchNav = () => {
    const wrapper = document.querySelector('.nav-wrapper');
    const nav = document.querySelector('.nav');
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    nav.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.nav-close');
    close.addEventListener('click', (e) => {
      wrapper.style.display = 'none';

      // setTimeout(() => {
      // wrapper.classList.remove('animated', 'fadeIn');
      // wrapper.classList.add('animated', 'fadeOut');
      // }, 500);
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'nav-wrapper') {
        wrapper.style.display = 'none';
      }
    });
  };
}

const main = new Main();
