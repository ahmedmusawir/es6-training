import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import Button from './modules/ui/Button';
import Navigation from './modules/ui/Navigation';
import TitleBar from './modules/ui/TitleBar';

class Main {
  constructor() {
    console.log('App Initialized!');

    //Get App from DOM
    this.app = document.getElementById('app');
    //Add Elements to the Page
    this.addUIElements();
  }

  addUIElements = () => {
    //TITLE BAR
    const titleBar = new TitleBar('The Application', 'the-navbar');
    titleBar.appendToElement(this.app);

    //NAV TITLE
    const nav = new Navigation('The Application');
    //NAV LINKS
    nav.addLinks('Home', '#');
    nav.addLinks('About', '#');
    nav.addLinks('Service', '#');
    nav.addLinks('Contact', '#');
    //ADDING NAV TO APP
    nav.appendToElement(this.app);

    //NAV LAUNCH BUTTON
    const navBtn1 = document.querySelector('#nav-btn');
    navBtn1.addEventListener('click', this.launchNav);
  };

  launchNav = () => {
    const wrapper = document.querySelector('.nav-wrapper');
    const nav = document.querySelector('.nav');
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    nav.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.nav-close');
    close.addEventListener('click', (e) => {
      nav.style.transition = 'all 1s';
      wrapper.style.transition = 'all 2.5s';
      nav.classList.add('hide');
      wrapper.classList.add('hide-bg');

      setTimeout(() => {
        wrapper.style.display = 'none';
      }, 2000);
      setTimeout(() => {
        nav.classList.remove('hide');
        wrapper.classList.remove('hide-bg');
      }, 2500);
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'nav-wrapper') {
        nav.style.transition = 'all 1s';
        wrapper.style.transition = 'all 2.5s';
        nav.classList.add('hide');
        wrapper.classList.add('hide-bg');
        setTimeout(() => {
          wrapper.style.display = 'none';
        }, 2000);
        setTimeout(() => {
          nav.classList.remove('hide');
          wrapper.classList.remove('hide-bg');
        }, 2500);
      }
    });
  };
}

const main = new Main();
