import './AboutPage.scss';
import UIBase from '../ui/UIBase';
import Image from '../ui/Image';
import application from '../../App';

class AboutPage extends UIBase {
  constructor() {
    super();
    console.log('Home Page Initialized');
  }

  createElement() {
    super.createElement();

    let i = new Image('https://picsum.photos/id/1016/600/400');
    i.appendToElement(this.element);
  }

  getElementString() {
    return `<div class="about-page"><!--Page Content Here --></div>`;
  }
}

export default AboutPage;
