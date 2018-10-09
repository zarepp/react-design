import React, {Component} from 'react';

export default class ModalOne extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<button id="button" onClick={this.props.updateStatus}>
        {this.props.children}
      </button>
		)
	}
}