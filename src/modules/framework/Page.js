import UIBase from '../ui/UIBase';
import Footer from '../ui/Footer';

class Page extends UIBase {
  constructor() {
    super();
  }

  getFooter = (element, footerText = 'Common Footer Text') => {
    const footer = new Footer(footerText);
    // const footer = new Footer('Fixed Footer from Page.js');
    footer.appendToElement(element);
  };
}

export default Page;
