import React, { Component } from 'react';

class Demo3 extends Component {
	static defaultProps = {
		title: 'Hello React'
	}

	render() {
		return (
			<div>{this.props.title}</div>
		);
	}
}

export default Demo3;
