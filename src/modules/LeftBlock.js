import './LeftBlock.scss';

class LeftBlock {
  constructor() {
    this.app = document.querySelector('#app');

    this.init();
    this.addContainer();
    this.listeners();
  }

  init = () => {
    console.log('Left Block started');
  };

  addContainer = () => {
    const leftDiv = document.createElement('div');
    leftDiv.id = 'left-block';
    const leftDivText = document.createTextNode('Left Block');

    const H1 = document.createElement('h1');
    H1.classList.add('display-5', 'text-center');
    H1.innerText = 'A Headline';

    leftDiv.appendChild(leftDivText);
    leftDiv.appendChild(H1);

    this.app.appendChild(leftDiv);
  };

  listeners() {
    const leftDiv = document.querySelector('#left-block');
    leftDiv.addEventListener('click', this.appClick);
  }

  appClick(e) {
    // e.stopPropagation();
    e.target.classList.toggle('left-styles');
    console.log('Left Block Was Clicked');
  }
}

export default LeftBlock;
