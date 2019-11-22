import TitleBar from '../ui/TitleBar';
import Navigation from '../ui/Navigation';

class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    this.nav = new Navigation('The Application');
    this.routeMap = {};
    this.defaultRoute = null;

    this.wrapper = '';
    this.navContent = '';
  }

  addRoute = (id, pageObject, defaultRoute = false) => {
    this.nav.addLink(id, '');

    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  };

  activateRoute = (route) => {
    let contentId = this.titleBar.element.lastElementChild.id;
    let content = this.titleBar.element.lastElementChild;
    if (contentId === 'page-content') {
      content.innerHTML = '';
      this.routeMap[route].appendToElement(content);
    }
  };

  show(element) {
    // Adding Title Bar
    this.titleBar.appendToElement(element);

    // Adding Navigation
    this.nav.appendToElement(element);
    // Adding Event Listener to NavLinks
    this.wrapper = document.querySelector('.nav-wrapper');
    this.navContent = document.querySelector('.nav');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      // console.log(link);
      link.addEventListener('click', (e) => {
        let route = e.target.innerHTML;
        this.activateRoute(route.trim());
        this.navAnimation();
      });
    });

    //NAV LAUNCH BUTTON
    const navBtn = document.querySelector('#nav-btn');
    navBtn.addEventListener('click', this.launchNav);

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

  launchNav = () => {
    this.wrapper.style.display = 'block';
    this.wrapper.classList.add('animated', 'fadeIn');
    this.navContent.classList.add('animated', 'slideInLeft');

    const close = document.querySelector('.nav-close');
    close.addEventListener('click', (e) => {
      this.navAnimation();
    });

    this.wrapper.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'nav-wrapper') {
        this.navAnimation();
      }
    });
  };

  navAnimation = () => {
    this.navContent.style.transition = 'all .5s';
    this.wrapper.style.transition = 'all .5s';
    this.navContent.classList.add('hide');
    this.wrapper.classList.add('hide-bg');
    setTimeout(() => {
      this.wrapper.style.display = 'none';
    }, 1000);
    setTimeout(() => {
      this.navContent.classList.remove('hide');
      this.wrapper.classList.remove('hide-bg');
    }, 1500);
  };
}

export default ApplicationBase;
