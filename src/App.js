import React, { Component } from 'react';
import logo from './img/logo.png';
import badge from './img/badge.png';
import phone from './img/phone.png';
import free from './img/free-scan.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="header">
          <div className="container">
            <div id="logo">
              <img src={logo} />
            </div>
            <div id="badge">
              <img src={badge} />
            </div>
          </div>
        </header>

        <section id="title">
          <div className="container">
            <h1>IS YOUR DEVICE PROTECTED?</h1>
            <p>FIND OUT WITH OUR FREE SCAN NOW</p>
          </div>
        </section>

        <section id="showcase">
          <div className="container">
            <img class="img_bottom" src={phone} />
            <img class="img_top" src={free} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
