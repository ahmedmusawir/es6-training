// import './Image.scss';
import UIBase from './UIBase';

class Image extends UIBase {
  constructor(fileName) {
    super();
    this.fileName = fileName;

    this.init();
  }

  init = () => {
    //Init Message
    // console.log('Image initialized!');
  };

  getElementString = () => {
    return `
    <!-- Simple Bootstrap Image -->
    <!-- https://picsum.photos/id/1015/600/400 -->
    <img src="${this.fileName}" class="img-fluid w-100" />

    `;
  };
}

export default Image;
