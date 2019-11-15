/**THIS IS A UI BASE CLASS
 * ALL THE UI ELEMENT CLASSES WILL EXTEND THIS
 */
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class UIBaseJQ {
  constructor() {
    //Init Message
    console.log('UIBaseJQ initialized!');
    //jQuery Object
    this.element = null;
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
  }

  getElementString() {
    throw 'Please override getElementString ...';
  }
}

export default UIBaseJQ;
