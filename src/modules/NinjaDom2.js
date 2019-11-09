import './NinjaDom2.scss';

class NinjaDom2 {
  constructor() {
    //Init Message
    console.log('NinjaDom2 initialized!');

    // const paras = document.querySelectorAll('.error');
    // const para = document.querySelector('p');
    // const paras = document.querySelectorAll('p');

    // paras.forEach((para) => {
    //   para.innerText += 'New Text';
    //   para.style.border = '1px solid red';
    // });

    const link = document.querySelector('a');

    console.log(link.getAttribute('href'));
    link.setAttribute('href', 'https://htmlfivedev.com');

    this.app = document.querySelector('#app');
    const content = document.querySelector('.content');
    const element = document.createElement('div');

    element.innerText = link.getAttribute('href');
    element.style.border = '1rem solid dodgerblue';
    element.style.padding = '1rem';
    content.appendChild(element);

    const box = document.createElement('section');
    box.style.width = '50%';
    box.style.height = 'auto';
    box.setAttribute('class', 'boxCSS');

    document.body.appendChild(box);
    // document.body.insertBefore(box, document.body.childNodes[0]);

    const boxContent = document.createElement('div');
    boxContent.innerHTML = '<h2>Everything is false!</h2>';
    boxContent.classList.add('boxContent');

    box.appendChild(boxContent);

    // ERROR & SUCCESS
    const paras = document.querySelectorAll('p');
    // console.log(paras);

    paras.forEach((para) => {
      if (para.innerText.includes('error')) {
        para.style.border = '2px solid red';
      }
      if (para.innerHTML.includes('success')) {
        para.style.border = '4px double green';
      }
    });
  }

  setListeners = () => {
    // console.log(this.btnOne);
    // if (this.btnOne) {
    //   this.btnOne.addEventListener('click', this.displayList);
    // }
  };
}

export default NinjaDom2;
