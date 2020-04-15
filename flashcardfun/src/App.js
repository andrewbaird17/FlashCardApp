import React, { Component } from 'react';
import CardsAPI from './FlashCardAPI';
import './App.css';

const CollectionList = (props) => (
	<div>
		{props.collections.map((collection) => (
			<Collection key={collection.id} {...collection} />
		))}
	</div>
);

class Collection extends Component {
	render() {
		const collection = this.props;
		return (
			<div className="collection">
				<div className="info">
					<div className="name">{collection.title}</div>
					<div className="cards">{collection.cards}</div>
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
	addNewCollection = (collectionData) => {
		this.setState((prevState) => ({
			collections: [...prevState.collections, collectionData],
		}));
	};
	render() {
		return (
			<div>
				<div className="header">{this.props.title}</div>
				<CollectionList cards={this.state.cards} />
			</div>
		);
	}
}
export default App;
