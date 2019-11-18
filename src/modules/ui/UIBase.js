/**THIS IS A UI BASE CLASS
 * ALL THE UI ELEMENT CLASSES WILL EXTEND THIS
 */

class UIBase {
  constructor() {
    //Init Message
    console.log('UIBase initialized!');
    //ES6 Object
    this.element = null;
  }

  createElement() {
    let s = this.getElementString();
    this.element = document.createElement('span');
    this.element = this.element;
    this.element.innerHTML = s;
  }

  appendToElement(el) {
    this.createElement();
    el.appendChild(this.element);
  }

  getElementString() {
    throw 'Please override getElementString ...';
  }
}

export default UIBase;
