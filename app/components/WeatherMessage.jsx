var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
			<p>It's {temp}&deg; in {location}</p>
		)
}

module.exports = WeatherMessage;