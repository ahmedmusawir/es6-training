import './HomePage.scss';
import Page from '../framework/Page';
import Image from '../ui/Image';
import Form from '../ui/form-comps/Form';

class HomePage extends Page {
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
    // console.log('Home Page Initialized');
    // this.home = document.querySelector('#app');
  }

  createElement() {
    super.createElement();

    const i = new Image('https://picsum.photos/id/1015/600/100');
    i.appendToElement(this.element);

    const form = new Form();
    form.appendToElement(this.element);
    // console.log(this.element);
  }

  getElementString() {
    return `
    <div class="home-page-title text-center py-3">
      <h1 class="display-4">${this.pageTitle}</h1>
    </div>`;
  }
}

export default HomePage;
