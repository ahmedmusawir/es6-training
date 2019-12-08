import './ContactPage.scss';
import Page from '../framework/Page';
import Image from '../ui/Image';

class ContactPage extends Page {
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
    // console.log('Contact Page Initialized');
  }

  createElement() {
    super.createElement();

    this.getFooter(this.element);

    let i = new Image('https://picsum.photos/id/1018/600/100');
    i.appendToElement(this.element);
  }

  getElementString() {
    return `
    <div class="home-page-title text-center py-3">
      <h1 class="display-4">${this.pageTitle}</h1>
    </div>`;
  }
}

export default ContactPage;
