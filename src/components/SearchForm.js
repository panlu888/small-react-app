import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchActions from '../actions/foodSearchAction';

class FormComponent extends React.Component {
	render() {
		return (
			<form>
			  <fieldset className="form-group">
			    <label for="formGroupExampleInput">Example label</label>
			    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label for="formGroupExampleInput2">Another label</label>
			    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
			  </fieldset>
			</form>
		);					
	}
} 

export default FormComponent;