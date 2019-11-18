import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import Button from './modules/ui/Button';
import PopupModal from './modules/ui/PopupModal';

class Main {
  constructor() {
    console.log('App Initialized!');

    //Get App from DOM
    this.app = document.getElementById('app');
    //Add Elements to the Page
    this.simpleBtn;
    this.modal;
    this.addUIElements();

    /**Modal Launch Button */
    this.activateModalLaunchBtn();
  }

  addUIElements = () => {
    this.modal = new PopupModal();
    this.modal.appendToElement(this.app);

    this.simpleBtn = new Button('Launch Modal');
    this.simpleBtn.appendToElement(this.app);
  };

  activateModalLaunchBtn = () => {
    this.simpleBtn.element.addEventListener('click', this.launchModal);
  };

  launchModal = () => {
    const wrapper = document.querySelector('.popup-wrapper');
    wrapper.style.display = 'block';

    const close = document.querySelector('.popup-close');
    close.addEventListener('click', (e) => {
      // e.stopPropagation();
      wrapper.style.display = 'none';
    });

    wrapper.addEventListener('click', (e) => {
      // e.stopPropagation();
      if (e.target.className === 'popup-wrapper') {
        wrapper.style.display = 'none';
      }
    });
  };
}

const main = new Main();
