import './NinjaDomEvents1.scss';

class NinjaDomEvents1 {
  constructor() {
    //Init Message
    console.log('NinjaDomEvents1 initialized!');

    this.btnClick = document.querySelector('button');
    this.list = document.querySelector('ul');
    this.listItems = document.querySelectorAll('li');
    this.delBtns = document.querySelectorAll('span.delete');
    // console.log(this.listItems);

    this.setListeners();
    this.styleList();
  }

  setListeners = () => {
    // console.log(this.btnOne);
    if (this.btnClick) {
      this.btnClick.addEventListener('click', this.addListItem);
      this.btnClick.classList.add('btn', 'btn-danger', 'btn-lg');
    }
    if (this.listItems) {
      this.listItems.forEach((listItem) => {
        listItem.addEventListener('click', this.crossItem);
      });
    }
    if (this.delBtns) {
      this.delBtns.forEach((delBtn) => {
        delBtn.addEventListener('click', this.removeItem);
      });
    }
  };
  crossItem = (e) => {
    console.log(e.target);
    e.target.style.textDecoration = 'line-through';
  };

  addListItem = (e) => {
    console.log('Clicked');
    const list = document.createElement('li');
    list.className = 'list-group-item';
    list.innerHTML =
      'New Item <span class="delete btn btn-danger float-right">X</span>';
    this.list.appendChild(list);
  };

  styleList = () => {
    this.list.classList.add('list-group');
    this.listItems.forEach((listItem) => {
      listItem.classList.add('list-group-item');
    });
  };

  removeItem = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  };
}

export default NinjaDomEvents1;
