import React, {Component, Fragment} from 'react';
import Gift from './../img/gift.png'

import download from './../img/download.png'
import clock from './../img/clock-circular-outline.png';

// import Button from './../core/Button';
import Modal from './../core/Modal';
import DownloadInfo from './../core/DownloadInfo';

export default class ModalOne extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="backdrop">
				<div className="container">
					<div className="img-gift">
		 				<img src={Gift} />
		 			</div> 
					<Modal>
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
					</Modal>
					<DownloadInfo />
				</div>
			</div>
		);
	}
}