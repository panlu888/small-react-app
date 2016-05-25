import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
require('styles/header.less');

const HeaderComponent = React.createClass({
	getInitialState: function() {
		return {
			selected: ''
		}
	},

	setActive: function(value) {
		this.setState({selected: value}); 
	},

	isActive: function(value) {
		if (value == this.state.selected) {
			return 'active';
		}
	},
	
	render: function() {
		return (
				<nav className="navbar navbar-light">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<li className={this.isActive('')}><a href="#">Home</a></li>
						<li className={this.isActive('Page1')}><a href="#" onClick={this.setActive.bind(this, 'Page1')}>Page 1</a></li>
						<li className={this.isActive('Page2')}><a href="#" onClick={this.setActive.bind(this, 'Page2')}>Page 2</a></li> 
						<li className={this.isActive('Page3')}><a href="#" onClick={this.setActive.bind(this, 'Page3')}>Page 3</a></li> 
					</ul>
					<form className="form-inline pull-right">
    				<input className="form-control" type="text" placeholder="Zip or City Name" />
    				<button className="btn btn-success" type="submit">Search</button>
  				</form>
				</nav>
		);
	}
});

module.exports = HeaderComponent;