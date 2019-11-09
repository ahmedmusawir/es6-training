import './NinjaDom1.scss';

class NinjaDom1 {
  constructor() {
    //Init Message
    console.log('NinjaDom1 initialized!');

    //Global Data
    this.html = '';
    this.people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

    //Dom Selectors
    this.app = document.querySelector('#app');
    this.ul = document.querySelector('.people');

    //Methods to run
    this.makeButtons();
    //Dom Selectors that were created dynamically
    this.btnOne = document.querySelector('.btnOneClass');
    this.btnTwo = document.querySelector('.btnTwoClass');
    this.setListeners();
  }

  makeButtons = () => {
    const btnOne = document.createElement('button');
    btnOne.innerText = 'JS Button One';
    btnOne.style.color = 'Dodgerblue';
    btnOne.style.backgroundColor = 'black';
    btnOne.className = 'btnOneClass';

    this.app.insertBefore(btnOne, this.app.childNodes[0]);

    const btnTwo = document.createElement('button');
    btnTwo.innerText = 'JS Clear';
    btnTwo.style.color = 'white';
    btnTwo.style.backgroundColor = 'red';
    btnTwo.classList.add('btnTwoClass');

    this.app.insertBefore(btnTwo, this.app.childNodes[0]);
  };

  setListeners = () => {
    // console.log(this.btnOne);
    if (this.btnOne) {
      this.btnOne.addEventListener('click', this.displayList);
    }

    if (this.btnTwo) {
      this.btnTwo.addEventListener('click', this.clearList);
    }
  };

  displayList = () => {
    this.people.forEach((person) => {
      this.html += `<li>${person}</li>`;
    });
    this.ul.innerHTML = this.html;
  };

  clearList = () => {
    this.ul.innerHTML = 'Kick everything out ...!';
  };
}

export default NinjaDom1;
