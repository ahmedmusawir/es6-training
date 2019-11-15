import './NinjaDomEvents1.scss';

class NinjaDomEvents1 {
  constructor() {
    //Init Message
    console.log('NinjaDomEvents1 initialized!');

    this.btnClick = document.querySelector('button');
    this.list = document.querySelector('ul');
    this.listItems = document.querySelectorAll('li');
    this.delBtns = document.querySelectorAll('span.delete');

    this.setListeners();
    this.styleList();
  }

  setListeners = () => {
    if (this.btnClick) {
      this.btnClick.addEventListener('click', this.addListItem);
      this.btnClick.classList.add('btn', 'btn-danger', 'btn-lg');
    }
    if (this.list) {
      this.list.addEventListener('click', this.listClickHandler);
    }
  };

  listClickHandler = (e) => {
    // console.dir(e.target);
    // console.log(e.target.tagName);
    // console.log(e.target.tagName);
    // console.log(e.target.firstElementChild.className.includes('delete'));
    // console.log(e.target.firstElementChild.className);
    // console.log(e.target.firstElementChild);
    if (e.target.className === 'list-group-item') {
      e.target.style.textDecoration = 'line-through';
    }

    if (e.target.tagName === 'SPAN') {
      console.log('Delete Clicked');
      e.target.parentElement.remove();
    }
  };

  addListItem = (e) => {
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
}

export default NinjaDomEvents1;
