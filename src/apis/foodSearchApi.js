import $ from 'jquery';
var constants = require('../constants/foodSearchConstants');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const WEATHER_API_KEY = 'e004ef9d8473ba2bdf87f71c0de30f20';

const foodSearchApi = {
	searchByName: function(name, success, failure) {
		$.ajax({
			url: BASE_URL + 'q=' + name + '&APPID=' + WEATHER_API_KEY,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				success(data);
			},
			error: function(xhr, status, error) {
				failure(error);
			}
		});
	},

	searchByZip: function(zip, countryCode, success, failure) {
		$.ajax({
			url: BASE_URL + 'zip=' + zip + ',' + countryCode + '&APPID=' + WEATHER_API_KEY,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				success(data);
			},
			error: function(xhr, status, error) {
				failure(error);
			}
		});
	}
};

module.exports = foodSearchApi;