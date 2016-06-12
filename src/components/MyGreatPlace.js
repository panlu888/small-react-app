import React from 'react';

const MyGreatPlace = React.createClass({
	// shouldComponentUpdate: function(nextProps, nextState) {
 //  	return nextProps.coord.lat !== this.props.coord.lat || 
	// 					nextProps.coord.lon !== this.props.coord.lon;
	// },
	
	render: function() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
});

module.exports = MyGreatPlace;