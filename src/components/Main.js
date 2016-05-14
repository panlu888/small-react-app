require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SearchForm from './SearchForm';
import Actions from '../actions/foodSearchAction';
import SearchStore from '../stores/foodSearchStore';
import 'bootstrap/dist/css/bootstrap.css';

let yeomanImage = require('../images/yeoman.png');

const AppComponent = React.createClass({
  getInitialState: function() {
  	return ({ weatherData: SearchStore.getcurWeatherData() });
  },
  
  componentDidMount: function() {
  	SearchStore.addChangeListener(this._onChange);
  	Actions.searchByZip('30022', 'us');
  },	
  
  componentWillUnmount: function() {
  	SearchStore.removeChangeListener(this._onChange);
  },
  
  _onChange: function() {
  	this.setState({ weatherData: SearchStore.getcurWeatherData() });
  	console.log('weatherData: ', SearchStore.getcurWeatherData());
  },
  
  render: function() {
    return (
      <div className="container index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      	<button type="submit" className="btn btn-primary">Apply</button>
      	<SearchForm />
      </div>
    );
  }
});

AppComponent.defaultProps = {};

export default AppComponent;
