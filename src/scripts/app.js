/** @jsx React.DOM */

localStorage.setItem("token", window.location.search.split("=")[1]);

var Header = require("./components/header");
var NewWorkout = require("./components/new_workout");
var Workout = require("./components/workout");
var Home = require("./components/home");
var RouteStore = require("./stores/route_store");
var Constants = require("./utils/constants");

var App = React.createClass({
	getInitialState: function(){
		return { route: RouteStore.getRoute() };
	},
	componentDidMount: function(){
		RouteStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function(){
		RouteStore.removeChangeListener(this.onChange);
	},
	onChange: function(){
		this.setState({ route: RouteStore.getRoute() });
	},
	render: function(){
		var content;
		if(this.state.route === Constants.Routes.HOME){
			content = (<Home></Home>);
		}
		else if(this.state.route === Constants.Routes.NEW_WORKOUT){
			content = (<NewWorkout></NewWorkout>);
		}
		else if(this.state.route === Constants.Routes.WORKOUT){
			content = (<Workout></Workout>);
		}
		return (
			<div>
				<Header></Header>
				{content}
			</div>
		);
	}
});

React.render(<App/>, document.body);