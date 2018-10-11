import React, {Component} from 'react';

export default class Modal extends Component {
	constructor() {
		super();
	}

	render() {
		return (
      <div className="modal">
        {this.props.children}
      </div>
		)
	}
}