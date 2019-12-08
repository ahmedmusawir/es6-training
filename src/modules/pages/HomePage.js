import './HomePage.scss';
import Page from '../framework/Page';
import Image from '../ui/Image';
import Form from '../ui/form-comps/Form';

class HomePage extends Page {
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
  }

  createElement() {
    super.createElement();

    // this.getFooter(this.element);
    this.getFooter(this.element, 'Home footer text');

    const i = new Image('https://picsum.photos/id/1015/600/100');
    i.appendToElement(this.element);

    const form = new Form();
    form.appendToElement(this.element);
  }

  getElementString() {
    return `
    <div class="home-page-title text-center py-3">
      <h1 class="display-4">${this.pageTitle}</h1>
    </div>`;
  }
}

export default HomePage;
