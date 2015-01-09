// app/routes/application.js
import Ember from "ember";

var ApplicationRoute = Ember.Route.extend({
  actions: {
    openModal: function(modalName){
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

export default ApplicationRoute;
