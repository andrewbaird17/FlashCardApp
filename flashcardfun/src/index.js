import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

function CardsinDeck(props){
  return(
    <span>
      <h1>{props.cardTitle}</h1>
    </span>
  )
}

export default CardsinDeck;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
