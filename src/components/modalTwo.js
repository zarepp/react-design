import React, {Component} from 'react';

import Modal from './../core/Modal';
import Title from './../core/Title';

export default class ModalTwo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="backdrop">
				<div className="container">
					<div className="back-layout">
						<Title>
							<p>SEND SMS TO CLAIM FREE VIRUS SCAN</p>
						</Title>
						<div className="mini-container">
							<Modal>
								<div id="claim">
									<p className="claim-header">SEND <span>1234</span> TO <span>76655</span></p>
									<div>
										<form>
											<div className="modal-body">
												<label>Enter phone number to start cleaning</label>
												<div className="input-container">
													<i className="icon"></i>
													<input type="text" placeholder="76655"/>
												</div>
											</div>

											<div className="modal-footer">
												<button onClick={this.props.updateStatus} className="button">Register My Number</button>
												{/* <Button updateStatus={() => this.props.updateStatus}>Register My Number</Button> */}
											</div>
										</form>
									</div>
								</div>	
							</Modal>
						</div>
					</div>
				</div>
			</div>
		)
	}
}