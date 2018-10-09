import React, {Component} from 'react';

export default class ModalTwo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="backdrop">
				<div className="modal">
					Modal Two
					<div className="modal-footer">
						<button onClick={this.props.updateStatus} className="button_1">Click Me</button>
					</div>
				</div>
			</div>
		)
	}
}