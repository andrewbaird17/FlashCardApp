import React, { Component } from 'react';
import axios from 'axios';

class FlashCardForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			word: '',
			definition: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	componentDidMount() {
		this.setState({
			stackId: this.props.id,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// Add the flashcard to the API using axios
		const cardAdd = {
			stackId: this.state.stackId,
			word: this.state.word,
			definition: this.state.definition,
		};
		console.log(cardAdd);
		axios('https://localhost:44393/api/card', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			data: cardAdd,
		}).then((result) => {
			console.log(result);
		});
		this.setState({
			word: '',
			definition: '',
		});
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="AddFlashCardForm__input">
						<label htmlFor="word">Word</label>
						<input
							type="text"
							name="word"
							value={this.state.word}
							onChange={this.onFieldChange}
						/>
					</div>
					<div className="AddFlashCardForm__input">
						<label htmlFor="definition">Definition</label>
						<input
							type="text"
							name="definition"
							value={this.state.definition}
							onChange={this.onFieldChange}
						/>
					</div>
					<input type="submit" value="Add Card" />
				</form>
			</div>
		);
	}
}

function AddFlashCard(props) {
	return (
		<div className="AddFlashCardForm">
			<h3>Add Flash Card</h3>
			<FlashCardForm id={props.id} />
		</div>
	);
}

export default AddFlashCard;
