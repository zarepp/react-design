import React, {Component} from 'react';

export default class ModalOne extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="backdrop">
				<div className="modal">
					Hello World
					<div className="modal-footer">
						<button onClick={this.props.updateStatus} class="button_1">Click Me</button>
					</div>
				</div>
			</div>
		)
	}
}