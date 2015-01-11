// app/controllers/signup.js
import Ember from "ember";

var SignupController = Ember.ObjectController.extend({
  email: null,
  password1: null,
  password2: null,
  passwordsMatch: function(){
    var password1 = this.get('password1'),
        password2 = this.get('password2');

    return !password1 || !password2 ||  (password1 === password2);
  }.property('password1','password2'),
  emailIsValid: function(){
    var email = this.get('email');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !email || re.test(email);
  }.property('email'),
  disableSubmit: function(){
    var emailIsValid = this.get('emailIsValid'),
        passwordsMatch = this.get('passwordsMatch'),
        email = this.get('email'),
        password1 = this.get('password1'),
        password2 = this.get('password2');
        return !email || !password1 || !password2 || !emailIsValid || !passwordsMatch;
  }.property('email','password1','password2','emailIsValid','passwordsMatch')
});

export default SignupController;
