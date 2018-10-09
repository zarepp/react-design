import React, {Component} from 'react';
import Gift from './../img/gift.png'

import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

// import Button from './../core/Button';
import DownloadInfo from './../core/DownloadInfo';

export default class ModalOne extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="backdrop">
					{/* <div className="gift">
						<img src={Gift} />
					</div> */}
									<div className="container">
					<div className="modal">
						<div id="register">
							<p>To start cleaning, register NOW & get FREE memory booster</p>
							<div>
								<form>
									<div className="modal-body">
										<label>Enter phone number to start cleaning</label>
										<div className="input-container">
											<i className="icon"></i>
											<input type="text" placeholder="(+60) mobile number"/>
										</div>
									</div>

									<div className="modal-footer">
										<button onClick={this.props.updateStatus} className="button_1">Register My Number</button>
										{/* <Button updateStatus={() => this.props.updateStatus}>Register My Number</Button> */}
									</div>
								</form>
							</div>
						</div>
					</div>


					{/* <div className="list2">
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
					</div> */}

					<DownloadInfo />

				</div>

			</div>
		)
	}
}