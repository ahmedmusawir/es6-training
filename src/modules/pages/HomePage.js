import './HomePage.scss';
import UIBase from '../ui/UIBase';
import Image from '../ui/Image';
import application from '../../App';

class HomePage extends UIBase {
  constructor() {
    super();
    console.log('Home Page Initialized');
  }

  createElement() {
    super.createElement();

    let i = new Image('https://picsum.photos/id/1015/600/400');
    i.appendToElement(this.element);
  }

  getElementString() {
    return `<div class="home-page"><!--Page Content Here --></div>`;
  }
}

export default HomePage;
