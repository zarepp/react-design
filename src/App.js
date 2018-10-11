import React, { Component } from 'react';
import logo from './img/logo.png';
import badge from './img/badge.png';
import phone from './img/phone.png';
import './App.css';

import ScanComponent from './components/ScanComponent';
import CleanComponent from './components/CleanComponent';
import ModelOne from './components/modalOne';
import ModelTwo from './components/modalTwo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "scan",
    }
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <div className="container">
            <div id="logo">
              <img src={logo} />
              <div id="badge">
                <img src={badge} />
              </div>
            </div>
          </div>
        </header>

        <section id="showcase">
          <div className="container">
            <img className="img-phone" src={phone} />
          </div>
        </section>

        { this.state.status === "scan" ? <ScanComponent updateStatus={() => this.updateStatus()} /> : 
            this.state.status === "clean" ? <CleanComponent updateStatus={() => this.updateStatus2()}/> :
              this.state.status === "register" ? <ModelOne updateStatus={() => this.updateStatus3()}/> : <ModelTwo />}

      </div>
    );
  }

  updateStatus() {
    this.setState({
      status: "clean",
    })
  }

  updateStatus2() {
    this.setState({
      status: "register",
    })
  }

  updateStatus3() {
    this.setState({
      status: "confirm",
    })
  }
}

export default App;
