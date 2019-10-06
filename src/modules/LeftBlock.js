import './LeftBlock.scss';

class LeftBlock {
  constructor() {
    this.app = document.querySelector('#app');

    // this.listeners();
    this.init();
    this.addContainer();
  }

  init = () => {
    console.log('Left Block started');
  };

  addContainer = () => {
    const newDiv = document.createElement('div');
  };
}

export default LeftBlock;
