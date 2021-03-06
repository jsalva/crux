import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup', {path: 'signup'});
  this.route('login', {path: 'login'});
});

export default Router;
