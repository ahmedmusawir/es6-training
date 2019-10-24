import './RightBlock.scss';

class RightBlock {
  constructor() {
    this.app = document.querySelector('#app');

    this.init();
    this.addContainer();

    this.btn = document.querySelector('button');
    this.btn.classList.add('btn', 'btn-danger', 'btn-block');
    this.listeners();
  }

  init = () => {
    console.log('Right Block started');
  };

  listeners() {
    // console.log(this.btn);
    this.btn.addEventListener('click', (e) => {
      const rightDiv = document.querySelector('#right-block');
      rightDiv.style.backgroundColor = 'yellow';
    });
  }

  addContainer = () => {
    const rightDiv = document.createElement('div');
    rightDiv.id = 'right-block';

    const rightDivText = document.createTextNode('Right Block');

    const content = document.createElement('article');
    content.innerHTML = `
    
    <h3>What the f is the internet</h3>
    <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
    </p> 
    <button id="butt">Change Color</button>
    `;

    rightDiv.appendChild(rightDivText);
    rightDiv.appendChild(content);
    rightDiv.style.padding = '2rem';

    this.app.appendChild(rightDiv);
  };
}

export default RightBlock;
