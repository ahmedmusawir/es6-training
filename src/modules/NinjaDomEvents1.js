import './NinjaDomEvents1.scss';

class NinjaDomEvents1 {
  constructor() {
    //Init Message
    console.log('NinjaDomEvents1 initialized!');

    this.btnClick = document.querySelector('button');
    console.log(this.btnClick);

    this.setListeners();
  }

  setListeners = () => {
    // console.log(this.btnOne);
    if (this.btnClick) {
      this.btnClick.addEventListener('click', this.displayList);
      this.btnClick.classList.add('btn', 'btn-danger', 'btn-lg');
    }
  };

  displayList = (e) => {
    console.log('Clicked');
  };
}

export default NinjaDomEvents1;
