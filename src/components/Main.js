require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from './Header';
import Map from './Map';
import Actions from '../actions/foodSearchAction';
import SearchStore from '../stores/foodSearchStore';
import 'bootstrap/dist/css/bootstrap.css';

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
      <div className="container-fluid">
        <Header />
        <Map {...this.state.weatherData} />
      </div>
    );
  }
});

AppComponent.defaultProps = {};

export default AppComponent;
