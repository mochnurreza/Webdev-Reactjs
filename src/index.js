import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import * as serviceWorker from './serviceWorker';

class App extends Component{
  render(){
    return(
    <div>
      <Navigation  LogoTitle="Azernr"/>
      <Header title="My Portofolio" button="Find Out More"/>
      <Services />
    </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode> 
  <App />,
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
