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
            <div>
              <img id="img-download" src={download} />
            </div>
            <div>
              <p className="download-header">78,681 Download</p>
              <p className="download-body">in the last 7 days</p>
            </div>
          </li>
          <li>
            <div>
              <img id="img-download" src={clock} />
            </div>
            <div>
              <p className="download-header">Most Recent Download</p>
              <p className="download-body">Less than a minute ago</p>
            </div>
          </li>
        </ul>
      </div>
		)
	}
}