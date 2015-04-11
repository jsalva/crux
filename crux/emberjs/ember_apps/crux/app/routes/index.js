// app/routes/index.js
import Ember from "ember";

var IndexRoute = Ember.Route.extend({
  model: function() {
      return ['hello','there','boy'];
  }
});

export default IndexRoute;
