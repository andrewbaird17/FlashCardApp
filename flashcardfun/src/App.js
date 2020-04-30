import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: [],
		};
	}
	componentDidMount() {
		axios.get('https://localhost:44393/api/collection').then((response) =>
			this.setState({
				collections: response.data,
			})
		);
	}

	render() {
		return (
			<div>
				<div className="header">{this.props.title}</div>
				<CollectionList collections={this.state.collections} />
			</div>
		);
	}
}

const CollectionList = (props) => (
	<div>
		{props.collections.map((collection) => (
			<Collection key={collection.id} {...collection} />
		))}
	</div>
);

class Collection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			title: null,
			cards: [{}],
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			cards: this.props.cards,
			isClicked: false,
		});
	}
	handleClick(event) {
		event.preventDefault();
		this.setState({
			isClicked: !this.state.isClicked,
		});
	}
	render() {
		const collection = this.props;
		if (this.state.isClicked) {
			return (
				<div className="collection">
					<button className="btn active" onClick={this.handleClick}>
						{collection.title}
					</button>
					<div>
						<CardList cards={this.state.cards} />
					</div>
				</div>
			);
		} else {
			return (
				<div className="collection">
					<button className="btn" onClick={this.handleClick}>
						{collection.title}
					</button>
				</div>
			);
		}
	}
}

const CardList = (props) => (
	<div>
		{props.cards.map((card) => (
			<Card key={card.id} {...card} />
		))}
	</div>
);

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			definition: null,
			word: null,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			definition: this.props.definition,
			word: this.props.word,
			showBack: false,
		});
	}

	handleClick(event) {
		event.preventDefault();
		this.setState({
			showBack: !this.state.showBack,
		});
	}

	render() {
		console.log(this);
		return (
			<div
				className={`flip-card ${this.state.showBack ? 'flip' : ''}`}
				onClick={this.handleClick}
			>
				<div className="flip-card-front">
					<p>{this.state.word}</p>
				</div>
				<div className="flip-card-back">
					<p>{this.state.definition}</p>
				</div>
			</div>
		);
	}
}

export default App;
