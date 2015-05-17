var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require("underscore");
var Constants = require("../utils/constants");

var CHANGE_EVENT = "change";
var exercises = {
	1: {
		id: 1,
		name: "deadlift"
	},
	2: {
		id: 2,
		name: "squat"
	},
	3: {
		id: 3,
		name: "pull-ups"
	},
	4: {
		id: 4,
		name: "bench press"
	},
	5: {
		id: 5,
		name: "shoulder press"
	},
	6: {
		id: 6,
		name: "dips"
	}
};

var ExerciseStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},

	getExercise: function(key){
		return exercises[key];
	},
	getExercises: function(){
		return exercises;
	}
});

ExerciseStore.dispatchToken = AppDispatcher.register(function(action){
	switch (action.actionType){}
});

module.exports = ExerciseStore;
