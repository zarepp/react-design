import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';
import free from './../img/free-scan.png';

import DownloadInfo from './../core/DownloadInfo';


export default class Scan extends Component {
    render() {
       return(
        <section id="action">
          <div className="container">
            <div>
              <img className="image_free" src={free} />
            </div>
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

              <DownloadInfo />
              
            </div>
          </div>
        </section>
       );
    }
}