var AppDispatcher = require("../dispatcher/app_dispatcher");
var Constants = require("../utils/constants");

var WorkoutActions = {
	startWorkout: function(sets){
		AppDispatcher.dispatch({
			actionType: Constants.Actions.START_WORKOUT,
			sets: sets
		})
	}
};

module.exports = WorkoutActions;