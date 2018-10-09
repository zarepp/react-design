import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

export default class Clean extends Component {
    render() {
       return(
        <section id="clean">
          <div className="container">
            <div className="box">
              <div className="instruction">
                <h1>POSIBLE INFECTIONS HAVE BEEN DETECTED</h1>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div>
                      <p>Infections found</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Infected objects removed</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Spyware found</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Not removed</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button onClick={this.props.updateStatus} className="button_1">SCAN MY DEVICE NOW</button>
              </div>
            </div>
          </div>
        </section>
       );
    }
}