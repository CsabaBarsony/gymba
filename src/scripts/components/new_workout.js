/** @jsx React.DOM */

var _ = require("underscore");
var ExerciseStore = require("../stores/exercise_store");
var WorkoutActions = require("../actions/workout_actions");

var NewWorkout = React.createClass({
	getInitialState: function(){
		return { sets: [] };
	},
	render: function(){
		var exerciseOptions = _.map(ExerciseStore.getExercises(), function(exercise, key){
			return (<option value={key} key={key}>{exercise.name}</option>);
		});
		var name = this.state.selectedExercise ? this.state.selectedExercise.name : "no exercise selected";
		var selectedExercises = _.map(this.state.sets, function(exercise, key){
			return (<li key={key}>{exercise.exercise.name} sets: {exercise.sets} weight: {exercise.weight} kg</li>);
		});
		return (
			<div>
				<h2>New Workout</h2>
				<button onClick={this.start}>Start Workout</button>
				<select name="exercise" onChange={this.selectExercise}>{exerciseOptions}</select>
				<button onClick={this.addExercise}>Add Exercise</button>
				{name}
				<ul>{selectedExercises}</ul>
			</div>
		);
	},
	selectExercise: function(e){
		this.setState({ selectedExercise: ExerciseStore.getExercise(e.target.value) });
	},
	addExercise: function(){
		if(!this.state.selectedExercise) return;
		var count = prompt("Sets");
		var weight = prompt("Weight");
		this.state.sets.push({
			exercise: this.state.selectedExercise,
			count: count,
			weight: weight
		});
		this.setState({ sets: this.state.sets });
	},
	start: function(){
		if(this.state.sets.length === 0) return;
		WorkoutActions.startWorkout(this.state.sets);
	}
});

module.exports = NewWorkout;