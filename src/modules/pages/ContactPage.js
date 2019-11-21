import './ContactPage.scss';
import UIBase from '../ui/UIBase';
import Image from '../ui/Image';

class ContactPage extends UIBase {
  constructor() {
    super();
    console.log('Home Page Initialized');
  }

  createElement() {
    super.createElement();

    let i = new Image('https://picsum.photos/id/1018/600/400');
    i.appendToElement(this.element);
  }

  getElementString() {
    return `<div class="contact-page"><!--Page Content Here --></div>`;
  }
}

export default ContactPage;
