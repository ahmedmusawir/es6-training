import './NinjaDom2.scss';

class NinjaDom2 {
  constructor() {
    //Init Message
    console.log('NinjaDom2 initialized!');
  }

  setListeners = () => {
    // console.log(this.btnOne);
    if (this.btnOne) {
      this.btnOne.addEventListener('click', this.displayList);
    }
  };
}

export default NinjaDom2;
