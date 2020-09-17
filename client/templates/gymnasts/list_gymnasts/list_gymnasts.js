/*****************************************************************************/
/* ListGymnasts: Event Handlers */
/*****************************************************************************/
Template.ListGymnasts.events({
});

/*****************************************************************************/
/* ListGymnasts: Helpers */
/*****************************************************************************/
Template.ListGymnasts.helpers({
	gymnasts: function() {
		return Gymnasts.find({}, {sort: {compdate: -1,comptype: 1, lname: 1}});
	}
});
Template.registerHelper('formatDate', function(date) {
	return moment.utc(date).format('DD-MM-YYYY');
});
/*****************************************************************************/
/* ListGymnasts: Lifecycle Hooks */
/*****************************************************************************/
Template.ListGymnasts.onCreated(function () {
});

Template.ListGymnasts.onRendered(function () {
});

Template.ListGymnasts.onDestroyed(function () {
});
