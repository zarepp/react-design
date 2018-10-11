import React, {Component} from 'react';

import './../styles/Title.css';
export default class Title extends Component {
	constructor() {
		super();
	}

	render() {
		return (
      <section id="title">
        <div className="container">
          {this.props.children}
        </div>
      </section>
		)
	}
}