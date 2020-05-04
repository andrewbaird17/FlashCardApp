import React, { Component } from 'react';
import axios from 'axios';

export class StackForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		// Add the stack to the API using axios
		const stackAdd = {
			title: this.state.title,
		};
		console.log(stackAdd);
		axios('https://localhost:44393/api/stack', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			data: stackAdd,
		}).then((result) => {
			console.log(result);
		});
		this.setState({
			title: '',
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
						<label htmlFor="title">Title </label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.onFieldChange}
						/>
					</div>
					<input type="submit" value="Add New Collection" />
				</form>
			</div>
		);
	}
}

function AddStack() {
	return (
		<div className="AddFlashCardForm">
			<StackForm />
		</div>
	);
}

export default AddStack;
