/**The Main App Class which Extends ApplicationBase */
import './style.scss';
import 'bootstrap-scss/bootstrap.scss';
import '../node_modules/animate.css/animate.css';
import ApplicationBase from './modules/framework/ApplicationBase';
import HomePage from './modules/pages/HomePage';
import AboutPage from './modules/pages/AboutPage';

class App extends ApplicationBase {
  constructor() {
    console.log('App.js Started!');
    super('The ES6 Framework');
    //Adding Routes
    this.addRoute('Home', new HomePage(), true);
    this.addRoute('About', new AboutPage());
    this.addRoute('Service', null);
    this.addRoute('Contact', null);
  }
}

export let application = new App();
const app = document.getElementById('app');

application.show(app);
