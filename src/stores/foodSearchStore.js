import AppDispatcher from '../dispatcher/AppDispatcher';
import Appconstants from '../constants/foodSearchConstants';
import {EventEmitter} from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let cur_weatherData = {};

function setWeatherData(data) {
	cur_weatherData = data;
}

function delWeatherData() {
	cur_weatherData = {};
}

const YourFoodSearchStore = _.assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getcurWeatherData: function () {
		return cur_weatherData;
	}
});

AppDispatcher.register((payload) => {
	switch (payload.actionType) {
		case Appconstants.SEARCH_NAME_SUCCESS:
			setWeatherData(payload.weatherData);
			YourFoodSearchStore.emitChange();
			break;

		case Appconstants.SEARCH_ZIP_SUCCESS:
			setWeatherData(payload.weatherData);
			YourFoodSearchStore.emitChange();
			break;

		default:
	}
});

export default YourFoodSearchStore;