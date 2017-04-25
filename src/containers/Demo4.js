import React, { Component } from 'react';

class Demo4 extends Component {
	handleClick() {
		this.refs.myTextInput.focus();
		console.log(this.refs.myTextInput.value);
	}

	render() {
		return (
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
			</div>
		);
	}
}

export default Demo4;