import React from 'react';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';
var _ = require('lodash');

const MapComponent = React.createClass({
	getCenter: function() {
		var center = [];
		center.push(this.props.coord.lat);
		center.push(this.props.coord.lon);
		return center;
	},
	
	render: function() {
		console.log(this.props);
		return (
			<GoogleMap
        defaultCenter={this.getCenter}
        zoom={4}>
      	<h1>{this.props.name}</h1>
      </GoogleMap>
		);
	}
});

export default MapComponent;