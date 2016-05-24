import React from 'react';
import SearchActions from '../actions/foodSearchAction';
import 'bootstrap/dist/css/bootstrap.css';
require('styles/SearchForm.less');

class FormComponent extends React.Component {
	render() {
		return (
     <div className="row">
      <form className="form-inline pull-right">
         <div className="form-group">
              <label for="exampleInputName2">Name</label>
              <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
         </div>
         <button type="submit" className="btn btn-primary">Send invitation</button>
      </form>
     </div>
    );					
	}
} 

export default FormComponent;