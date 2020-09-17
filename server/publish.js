


Meteor.publish('gymnasts', function () {
  return Gymnasts.find();
});