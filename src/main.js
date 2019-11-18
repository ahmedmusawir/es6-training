import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import Button from './modules/ui/Button';
import PopupModal from './modules/ui/PopupModal';
import Navigation from './modules/ui/Navigation';

class Main {
  constructor() {
    console.log('App Initialized!');

    //Get App from DOM
    this.app = document.getElementById('app');
    //Add Elements to the Page
    this.simpleBtn;
    this.modal;
    this.navBtn;
    this.addUIElements();

    /**Modal Launch Button */
    this.activateNavLaunchBtn();
  }

  addUIElements = () => {
    this.navBtn = new Button('Launch Nav');
    this.navBtn.appendToElement(this.app);
    this.nav = new Navigation();
    this.nav.appendToElement(this.app);
  };

  activateNavLaunchBtn = () => {
    this.navBtn.element.addEventListener('click', this.launchNav);
  };

  launchNav = () => {
    const wrapper = document.querySelector('.popup-wrapper');
    const popup = document.querySelector('.popup');
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    popup.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.popup-close');
    close.addEventListener('click', (e) => {
      wrapper.style.display = 'none';
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'popup-wrapper') {
        wrapper.style.display = 'none';
        // console.dir(e.target);
      }
    });
  };
}

const main = new Main();
