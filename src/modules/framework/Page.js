import BaseElement from '../ui/UIBase';
import Footer from '../ui/Footer';

class Page extends BaseElement {
  constructor() {
    super();
  }

  getFooter = () => {
    super.createElement();
    const footer = new Footer('Fixed Footer from Page.js');
    footer.appendToElement(this.element);
    console.log(footer);
    console.log(this.element);
    //NOT WORKING...
  };
}

export default Page;
