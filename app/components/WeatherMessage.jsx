var React = require('react');

var WeatherMessage = React.createClass({
	render: function () {
		return (
			<p>It's {this.props.temp}&deg; in {this.props.location}</p>
		)
	}
})

module.exports = WeatherMessage;