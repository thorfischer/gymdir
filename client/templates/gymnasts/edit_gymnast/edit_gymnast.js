/*****************************************************************************/
/* EditGymnast: Event Handlers */
/*****************************************************************************/
Template.EditGymnast.events({
});

/*****************************************************************************/
/* EditGymnast: Helpers */
/*****************************************************************************/
Template.EditGymnast.helpers({
	beforeRemove: function() {
		return function (collection, id) {
			var doc = collection.findOne(id);
			if (confirm('Really Delete Gymnast: "' + doc.fname + " " + doc.lname + '"?')) {
				this.remove();
				Router.go('gymnastsList');
			}
		};
	}
});

/*****************************************************************************/
/* EditGymnast: Lifecycle Hooks */
/*****************************************************************************/
Template.EditGymnast.onCreated(function () {
});

Template.EditGymnast.onRendered(function () {
});

Template.EditGymnast.onDestroyed(function () {
});
