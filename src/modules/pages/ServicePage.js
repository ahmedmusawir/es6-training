import './ServicePage.scss';
import Page from '../framework/Page';
import Image from '../ui/Image';

class ServicePage extends Page {
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
    console.log('Service Page Initialized');
  }

  createElement() {
    super.createElement();

    this.getFooter(this.element);

    let i = new Image('https://picsum.photos/id/1019/600/100');
    i.appendToElement(this.element);
  }

  getElementString() {
    return `
    <div class="home-page-title text-center py-3">
      <h1 class="display-4">${this.pageTitle}</h1>
    </div>`;
  }
}

export default ServicePage;
