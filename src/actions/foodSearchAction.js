var AppDispatcher = require('../dispatcher/AppDispatcher');
var foodSearchConstants = require('../constants/foodSearchConstants');
var apis = require('../apis/foodSearchApi');

const FoodSearchActions = {
	searchByName: function (name) {
		apis.searchByName(name, (data) => {
			AppDispatcher.dispatch({
				actionType: foodSearchConstants.SEARCH_NAME_SUCCESS,
				weatherData: data
			});
		}, (error) => {
			AppDispatcher.dispatch({
				actionType: foodSearchConstants.SEARCH_NAME_FAILURE,
				error: error
			});
		});
	},

	searchByZip: function (zip, countryCode) {
		apis.searchByZip(zip, countryCode, (data) => {
			AppDispatcher.dispatch({
				actionType: foodSearchConstants.SEARCH_ZIP_SUCCESS,
				weatherData: data
			});
		}, (error) => {
			AppDispatcher.dispatch({
				actionType: foodSearchConstants.SEARCH_ZIP_FAILURE,
				error: error
			});
		});
	}
};

module.exports = FoodSearchActions;