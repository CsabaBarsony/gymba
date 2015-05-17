/** @jsx React.DOM */

var RouteActions = require("../actions/route_actions");
var Constants = require("../utils/constants");

var Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Gymba</h1>
				<nav>
					<ul>
						<li>
							<a href="#" onClick={this.home}>Home</a>
						</li>
						<li>
							<a href="#" onClick={this.new_workout}>New Workout</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	},
	home: function(){
		RouteActions.navigate(Constants.Routes.HOME);
	},
	new_workout: function(){
		RouteActions.navigate(Constants.Routes.NEW_WORKOUT);
	}
});

module.exports = Header;