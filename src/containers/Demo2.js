import React, { Component } from 'react';

let names = ['Alice', 'Emily', 'Kate'];
class Demo2 extends Component {
	render() {
		return (
			<div className="demo2">
			{
				names.map(function(name, index) {
					return <div key={index}>Hello, {name}!</div>
				})
			}
			</div>
		);
	}
}

export default Demo2;
