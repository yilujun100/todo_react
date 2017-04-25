import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Hello'
		}
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		let value = this.state.value;
		return (
			<div>
				<input type="text" value={value} onChange={this.handleChange.bind(this)} />
				<p>{value}</p>
			</div>
		);
	}
}

export default Input;
