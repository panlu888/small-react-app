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
		return (
			<GoogleMap
				center={this.getCenter}
				zoom={4}>
				<MyGreatPlace lat={this.props.coord.lat} lng={this.props.coord.lon} text={this.props.name} />
			</GoogleMap>
		);
	}
});

module.exports = MapComponent;