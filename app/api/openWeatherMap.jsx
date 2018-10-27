var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=903d27987f42841197d5f8c7cddf0385';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				console.log(res)
				throw new Error('Unable to fetch weather.');
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error('Unable to fetch weather.');
		});
	}
}