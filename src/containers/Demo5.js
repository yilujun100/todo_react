import React, { Component } from 'react';

class LikeButton extends Component {
	/*getInitialState() {
		return {liked: false}
	}*/
	constructor(props) {
		super(props);
		this.state = {
			linked: false
		};
	}

	handleClick(event) {
		this.setState({liked: !this.state.liked});
	}

	render() {
		let text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onClick={this.handleClick.bind(this)}>
				You {text} this. Click to toggle.
			</p>
		);
	}
}

export default LikeButton;