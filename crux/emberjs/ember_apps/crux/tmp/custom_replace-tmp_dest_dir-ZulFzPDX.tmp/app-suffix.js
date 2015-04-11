/* jshint ignore:start */

define('crux/config/environment', ['ember'], function(Ember) {
  var prefix = 'crux';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("crux/tests/test-helper");
} else {
  require("crux/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
