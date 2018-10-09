import React, { Component } from 'react';
import logo from './img/logo.png';
import badge from './img/badge.png';
import phone from './img/phone.png';
import './App.css';

import Scan from './components/scan';
import Clean from './components/clean';
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

        <section id="title">
          <div className="container">
            <p class="header">IS YOUR DEVICE PROTECTED?</p>
            <p>FIND OUT WITH OUR FREE SCAN NOW</p>
          </div>
        </section>

        <section id="showcase">
          <div className="container">
            <div className="img_bundle1">
              <img className="img_bottom" src={phone} />
            </div>
          </div>
        </section>

        { this.state.status === "scan" ? <Scan updateStatus={() => this.updateStatus()} /> : 
            this.state.status === "clean" ? <Clean updateStatus={() => this.updateStatus2()}/> :
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
