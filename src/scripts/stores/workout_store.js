var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require("underscore");
var Constants = require("../utils/constants");

var CHANGE_EVENT = "change";
var sets;

var WorkoutStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},

	getSets: function(){
		return sets;
	}
});

WorkoutStore.dispatchToken = AppDispatcher.register(function(action){
	switch (action.actionType){
		case Constants.Actions.START_WORKOUT:
			sets = action.sets;
			WorkoutStore.emitChange();
			break;
	}
});

module.exports = WorkoutStore;
