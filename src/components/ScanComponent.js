import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';
import free from './../img/free-scan.png';

import DownloadInfo from '../core/DownloadInfo';


export default class ScanComponent extends Component {
    render() {
       return(
        <div className="layout">
          <section id="action">

            <div className="container">
              <div>
                <section id="title">
                  <div className="container">
                    <p className="header">IS YOUR DEVICE PROTECTED?</p>
                    <p>FIND OUT WITH OUR FREE SCAN NOW</p>
                  </div>
                </section>
              </div>
              <div>
                <img className="image_free" src={free} />
              </div>
              <div className="box">
                <div className="countdown-box">
                  <div className="message">
                    <p>FREE SCAN ENDS IN</p>
                  </div>
                  <div className="count">
                    <p>00:15</p>
                  </div>
                </div>
                <div className="button">
                  <button onClick={this.props.updateStatus} className="button_1">SCAN MY DEVICE NOW</button>
                </div>
                <DownloadInfo />
              </div>
            </div>

          </section>
        </div>
       );
    }
}