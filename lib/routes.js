Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/gymnasts/create', {
  name: 'createGymnast',
  controller: 'GymnastsController',
  action: 'create',
  where: 'client'
});


Router.route('/gymnasts', {
  name: 'gymnastsList',
  controller: 'GymnastsController',
  action: 'list',
  where: 'client'
});


Router.route('/gymnasts/:_id', {
  name: 'editGymnast',
  controller: 'GymnastsController',
  action: 'edit',
  where: 'client'
});


Router.route('/tabular', {
  name: 'tabularGymnast',
  controller: 'GymnastsController',
  action: 'tabular',
  where: 'client'
});


Router.route('/vis', {
  name: 'gymnastVis',
  controller: 'GymnastsController',
  action: 'vis',
  where: 'client'
});


Router.route('/notes', {
  name: 'notes',
  controller: 'GymnastsController',
  action: 'notes',
  where: 'client'
});