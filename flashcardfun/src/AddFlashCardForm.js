import React, { Component } from 'react';

class FlashCardForm extends Component {
	render() {
		return (
			<div>
				<form></form>
			</div>
		);
	}
}

function AddFlashCard() {
	return (
		<div className="AddFlashCardForm">
			<h3>Add Flash Card</h3>
			<FlashCardForm />
		</div>
	);
}

export default FlashCardForm;
