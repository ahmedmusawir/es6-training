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
    // this.modal = new PopupModal();
    // this.modal.appendToElement(this.app);
    // this.simpleBtn = new Button('Launch Modal');
    // this.simpleBtn.appendToElement(this.app);
    this.navBtn = new Button('Launch Nav');
    this.navBtn.appendToElement(this.app);
    this.nav = new Navigation();
    this.nav.appendToElement(this.app);
  };

  activateNavLaunchBtn = () => {
    this.navBtn.element.addEventListener('click', this.launchNav);
    // this.simpleBtn.element.addEventListener('click', this.launchModal);
  };

  launchNav = () => {
    const wrapper = document.querySelector('.popup-wrapper');
    const popup = document.querySelector('.popup');
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    popup.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.popup-close');
    close.addEventListener('click', (e) => {
      // e.stopPropagation();
      // popup.classList.remove('animated', 'slideInLeft');
      // popup.classList.add('animated', 'slideOutLeft');
      // wrapper.classList.add('animated', 'fadeOut');
      wrapper.style.display = 'none';

      // setTimeout(() => {
      //   popup.classList.remove('animated', 'fadeOut');
      //   wrapper.classList.add('animated', 'fadeIn');
      // }, 1000);
    });

    wrapper.addEventListener('click', (e) => {
      // e.stopPropagation();
      if (e.target.classList[0] === 'popup-wrapper') {
        wrapper.style.display = 'none';
        // console.dir(e.target);
      }
    });
  };
}

const main = new Main();
