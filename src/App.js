import React, { Component } from 'react';
import Routes from "./Routes";
import './App.css';
import Header from './views/Header';
import Auth from './modules/Auth';


class App extends Component {
  state = {
    // auth: Auth.isUserAuthenticated(),
    auth: true,
  }

  changeAuth = () => {
    this.setState({
      auth: Auth.isUserAuthenticated(),
    });
  }

  logout = () => {
    Auth.deauthenticateUser();
    this.setState({
      auth: Auth.isUserAuthenticated(),
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.auth) 
          ? <Header />
          : null}
          <Routes />  
        </div>
      </div>
    );
  }
}

export default App;
