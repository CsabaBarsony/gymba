/** @jsx React.DOM */

var _ = require("underscore");
var WorkoutStore = require("../stores/workout_store");
var WorkoutActions = require("../actions/workout_actions");

var Workout = React.createClass({
	getInitialState: function(){
		return { sets: WorkoutStore.getSets() };
	},
	render: function(){
		var sets = _.map(this.state.sets, function(set, key){
			return (<li key={key}>{set.exercise.name} {set.count} {set.weight} kg</li>);
		});
		return (
			<div>
				<h2>Workout</h2>
				<ul>{sets}</ul>
			</div>
		);
	}
});

module.exports = Workout;
