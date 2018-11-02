var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="center-text">About</h1>
			<p>I am full stack developer, I enjoy the creativity of front end and the logic of backend design. I bring strong HTML, CSS, and Javascript, jQuery, node.js, element, and React knowledge, leveraged to make complex back end for clean front end applications.</p>

			<p>I have a Bachelor’s Degree in Computer Information Systems, with a minor in Business Informatics, as well as several technical certifications. When challenged with a stressful environment I am able to tap deep reserves and rise above.</p>

			<p>My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application.</p>
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