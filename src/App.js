/**The Main App Class which Extends ApplicationBase */
import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import ApplicationBase from './modules/framework/ApplicationBase';
import HomePage from './modules/pages/HomePage';
import AboutPage from './modules/pages/AboutPage';
import ServicePage from './modules/pages/ServicePage';
import ContactPage from './modules/pages/ContactPage';

class App extends ApplicationBase {
  constructor() {
    console.log('App.js Started!');
    super('The ES6 Framework');
    //Adding Routes
    this.addRoute('Home', new HomePage('Home Page'), true);
    this.addRoute('About', new AboutPage('About Page'));
    this.addRoute('Service', new ServicePage('Service Page'));
    this.addRoute('Contact', new ContactPage('Contact Page'));
  }
}

export let application = new App();
// console.log(application);

const app = document.getElementById('app');

application.show(app);
