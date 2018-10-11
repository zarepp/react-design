import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

export default class Clean extends Component {
    render() {
       return(
        <div className="layout"> 
          <section id="action">

            <div className="container">
              <div>
                <section id="title">
                  <div className="container">
                    <p className="header">SCANNING YOUR DEVICE NOW!</p>
                  </div>
                </section>
              </div>
              <div className="box">
                <div className="progress">
                  <h1>90%</h1>
                </div>
                <div className="list-box">
                  <div className="list-header">
                    <p>POSSIBLE INFECTIONS HAVE BEEN DETECTED</p>
                  </div>
                  <div className="list-body">
                    <ul>
                      <li>
                        <p>Infections found</p>
                        <p className="list-num">0</p>
                      </li>
                      <li>
                        <p>Infected objects removed</p>
                        <p className="list-num">0</p>
                      </li>
                      <li>
                        <p>Spyware found</p>
                        <p className="list-num">0</p>
                      </li>
                      <li>
                        <p>Not removed</p>
                        <p className="list-num">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="button">
                  <button onClick={this.props.updateStatus} className="button_1">SCAN MY DEVICE NOW</button>
                </div>
              </div>
            </div>

          </section>
        </div>
       );
    }
}