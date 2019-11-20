import TitleBar from '../ui/TitleBar';
import Navigation from '../ui/Navigation';

class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
  }

  show(element) {
    // console.log(`From ApplicationBase.show: ${element}`);
    // console.dir(element);
    this.titleBar.appendToElement(element);

    //NAV TITLE
    this.nav = new Navigation('The Application');
    //NAV LINKS
    nav.addLinks('Home', '#');
    nav.addLinks('About', '#');
    nav.addLinks('Service', '#');
    nav.addLinks('Contact', '#');
    //ADDING NAV TO APP
    nav.appendToElement(element);

    //NAV LAUNCH BUTTON
    const navBtn = document.querySelector('#nav-btn');
    navBtn.addEventListener('click', this.launchNav);
  }

  launchNav = () => {
    const wrapper = document.querySelector('.nav-wrapper');
    const nav = document.querySelector('.nav');
    wrapper.style.display = 'block';
    wrapper.classList.add('animated', 'fadeIn');
    nav.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.nav-close');
    close.addEventListener('click', (e) => {
      nav.style.transition = 'all 1s';
      wrapper.style.transition = 'all 2.5s';
      nav.classList.add('hide');
      wrapper.classList.add('hide-bg');

      setTimeout(() => {
        wrapper.style.display = 'none';
      }, 2000);
      setTimeout(() => {
        nav.classList.remove('hide');
        wrapper.classList.remove('hide-bg');
      }, 2500);
    });

    wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'nav-wrapper') {
        nav.style.transition = 'all 1s';
        wrapper.style.transition = 'all 2.5s';
        nav.classList.add('hide');
        wrapper.classList.add('hide-bg');
        setTimeout(() => {
          wrapper.style.display = 'none';
        }, 2000);
        setTimeout(() => {
          nav.classList.remove('hide');
          wrapper.classList.remove('hide-bg');
        }, 2500);
      }
    });
  };
}

export default ApplicationBase;
