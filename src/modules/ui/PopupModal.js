import './PopupModal.scss';
import UIBase from './UIBase';

class PopupModal extends UIBase {
  constructor(title) {
    super();
    this.title = title;

    this.init();
  }

  init = () => {
    //Init Message
    console.log('PopupModal initialized!');
  };

  getElementString = () => {
    return `
    <!-- Simple Moose PopupModal -->
    <div class="popup-wrapper">
      <div class="popup">
        <div class="popup close">X</div>
        <div class="popup-content">
          <h2>Moose OOP Sale</h2>
          <p>50% off all OOP code, don't miss out!</p>
          <a class="btn btn-danger btn-lg" href="#">View Code</a>
        </div>
      </div>
    </div>
    `;
  };
}

export default PopupModal;
