import React from 'react';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';
var _ = require('lodash');

const MapComponent = React.createClass({
	getDefaultProps: function() {
		return {
			zoom: 4,
			center: [59.938043, 30.337157],
		};
	},
	
	// shouldComponentUpdate: function(nextProps, nextState) {
 //  	return nextProps.coord.lat !== this.props.coord.lat || 
	// 					nextProps.coord.lon !== this.props.coord.lon;
	// },

	changeKeyName: function() {
		return _(this.props.coord).mapKeys(function(v, k) { 
			if (k==='lon') {
					return 'lng';
				}
			});
	},
	
	render: function() {
		return (
			<GoogleMap
				center={this.props.center}
				zoom={this.props.zoom}>
				<MyGreatPlace lat={'40'} lng={'70'} text={this.props.name} />
			</GoogleMap>
		);
	}
});

module.exports = MapComponent;