import React from 'react';

const MyGreatPlace = React.createClass({
	render: function () {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
});

export default MyGreatPlace;