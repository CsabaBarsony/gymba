var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require("underscore");
var Constants = require("../utils/constants");

var CHANGE_EVENT = "change";
var route = Constants.Routes.HOME;

var RouteStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},

	getRoute: function(){
		return route;
	}
});

RouteStore.dispatchToken = AppDispatcher.register(function(action){
	switch (action.actionType){
		case Constants.Actions.NAVIGATE:
			route = action.route;
			RouteStore.emitChange();
			break;
		case Constants.Actions.START_WORKOUT:
			route = Constants.Routes.WORKOUT;
			RouteStore.emitChange();
			break;
	}
});

module.exports = RouteStore;