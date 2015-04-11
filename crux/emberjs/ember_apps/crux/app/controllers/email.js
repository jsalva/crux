// app/controllers/email.js
import Ember from "ember";

var EmailController = Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.send('closeModal');
    }
  }
});

export default EmailController;
