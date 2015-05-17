var AppDispatcher = require("../dispatcher/app_dispatcher");
var Constants = require("../utils/constants");

var RouteActions = {
	navigate: function(route){
		AppDispatcher.dispatch({
			actionType: Constants.Actions.NAVIGATE,
			route: route
		})
	}
};

module.exports = RouteActions;
