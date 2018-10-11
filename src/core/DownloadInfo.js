import React, {Component} from 'react';
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

import './../styles/DownloadInfo.css'

export default class DownloadInfo extends Component {
	render() {
		return (
			<div className="download-info">
        <ul>
          <li>
            <img id="img-download" src={download} />
            <div>
              <h1>78,681 Download</h1>
              <p>in the last 7 days</p>
            </div>
          </li>
          <li>
            <img id="img-download" src={clock} />
            <div>
              <h1>Most Recent Download</h1>
              <p>Less than a minute ago</p>
            </div>
          </li>
        </ul>
      </div>
		)
	}
}