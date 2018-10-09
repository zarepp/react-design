import React, {Component} from 'react';
import './../styles/DownloadInfo.css'
import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

export default class ModalOne extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="list2">
        <ul>
          <li>
            <img className="download" src={download} />
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
		)
	}
}