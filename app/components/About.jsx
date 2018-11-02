var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="center-text">About</h1>
			<p>This is a weather application built on React. I have built this to keep up my skills with React, post bootcamp.</p>
			<ul>
				<li>
					<a rel="noopener noreferrer" href="https://mbrennecke.github.io/" target="_blank">My portfolio</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="https://github.com/mbrennecke" target="_blank">My github</a>
				</li>
			</ul>			
		</div>
	)
};

module.exports = About;