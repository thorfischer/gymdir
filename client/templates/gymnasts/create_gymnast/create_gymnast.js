/*****************************************************************************/
/* CreateGymnast: Event Handlers */
/*****************************************************************************/
Template.CreateGymnast.events({
});

/*****************************************************************************/
/* CreateGymnast: Helpers */
/*****************************************************************************/
Template.CreateGymnast.helpers({
	lnameOptions: function() {
		return Gymnasts.find().map(function (c) {
			return {label: c.lname, value: c._id};
		});
	}
});

/*****************************************************************************/
/* CreateGymnast: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateGymnast.onCreated(function () {
});

Template.CreateGymnast.onRendered(function () {
});

Template.CreateGymnast.onDestroyed(function () {
});
