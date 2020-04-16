import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const CollectionList = (props) => (
	<div>
		{props.collections.map((collection) => (
			<Collection key={collection.id} {...collection} />
		))}
	</div>
);

/* class Button extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		// CardsAPI posts the data to the FlashCardAPI
		const data = ;
		this.props.onSubmit(data);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        <input></input>
				<button>Add New Flash Card To Collection</button>
			</form>
		);
	}
} */

class Collection extends Component {
	state = {
		id: null,
		title: null,
		cards: [{}],
	};
	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			cards: this.props.cards,
		});
	}
	render() {
		const collection = this.props;
		return (
			<div className="collection">
				<div className="info">
					{/* make the collection expandable with a Click
					Be able to click through the collections
					Show which collection is active  */}
					<div className="title">{collection.title}</div>
					<CardList cards={this.state.cards} />
				</div>
			</div>
		);
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
	state = {
		id: null,
		definition: null,
		word: null,
	};

	componentDidMount() {
		this.setState({
			id: this.props.id,
			definition: this.props.definition,
			word: this.props.word,
		});
	}

	render() {
		const card = this.props;
		return (
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<p>{card.word}</p>
					</div>
					<div className="flip-card-back">
						<p>{card.definition}</p>
					</div>
				</div>
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: [],
		};
	}
	/* 	addNewCollection = (collectionData) => {
		this.setState((prevState) => ({
			collections: [...prevState.collections, collectionData],
		}));
  }; */
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
export default App;
