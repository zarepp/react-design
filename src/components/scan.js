import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

export default class Scan extends Component {
    render() {
       return(
        <section id="action">
          <div className="container">
            <div className="box">
              <div className="instruction">
                <h1>FREE SCAN ENDS IN</h1>
              </div>
              <div className="countdown">
                <h1>00:15</h1>
              </div>
              <div>
                <button onClick={this.props.updateStatus} className="button_1">SCAN MY DEVICE NOW</button>
              </div>

              <div className="list">
                <ul>
                  <li>
                    <img src={download} />
                    <div>
                      <h1>78,681 Download</h1>
                      <p>in the last 7 days</p>
                    </div>
                  </li>
                  <li>
                    <img src={clock} />
                    <div>
                      <h1>Most Recent Download</h1>
                      <p>Less than a minute ago</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
       );
    }
}