require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from './Header';
import Map from './Map';
import Api from '../apis/foodSearchApi';
import SearchStore from '../stores/foodSearchStore';
import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = React.createClass({
  getInitialState: function() {
    return { weatherData: SearchStore.getcurWeatherData() };
  },
  
  componentDidMount: function() {
  	SearchStore.addChangeListener(this._onChange);
    Api.searchByZip('30022', 'us', this._successCallBack,  this._errorCallBack);
  },	
  
  componentWillUnmount: function() {
  	SearchStore.removeChangeListener(this._onChange);
  },
  
  _onChange: function() {
    this.setState({ weatherData: SearchStore.getcurWeatherData() });
  },
  
  _successCallBack: function(data) {
    this.setState({ weatherData: data });
  },
  
  _errorCallBack: function(err) {
    console.log(err);
  },
  
  render: function() {
    return (
      <div className="container-fluid">
        <Header {...this.state.weatherData} />
      </div>
    );
  }
});

AppComponent.defaultProps = {};

export default AppComponent;
