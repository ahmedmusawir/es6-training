import './RightBlock.scss';

class RightBlock {
  constructor() {
    this.app = document.querySelector('#app');

    // this.listeners();
    this.init();
    this.addContainer();
  }

  init = () => {
    console.log('Right Block started');
  };

  addContainer = () => {
    const newDiv = document.createElement('div');
    newDiv.id = 'right-block';
    const newDivText = document.createTextNode('Right Block');

    newDiv.appendChild(newDivText);

    this.app.appendChild(newDiv);
  };
}

export default RightBlock;
