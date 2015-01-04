eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"crux/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"crux/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=crux/app.js");

;eval("define(\"crux/initializers/export-application-global\", \n  [\"ember\",\"crux/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=crux/initializers/export-application-global.js");

;eval("define(\"crux/router\", \n  [\"ember\",\"crux/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'signup\', {path: \'signup\'});\n      this.route(\'login\', {path: \'login\'});\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=crux/router.js");

;eval("define(\"crux/routes/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    // app/routes/index.js\n    var Ember = __dependency1__[\"default\"];\n\n    var IndexRoute = Ember.Route.extend({\n      model: function() {\n          return [\'hello\',\'there\',\'boy\'];\n      }\n    });\n\n    __exports__[\"default\"] = IndexRoute;\n  });//# sourceURL=crux/routes/index.js");

;eval("define(\"crux/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n        <img class=\'navbar-logo\' src=\'/static/crux/assets/img/logo.svg\' alt=\'crux.nyc\' />\\n        <b>crux</b>\\n      \");\n      }\n\n    function program3(depth0,data) {\n      \n      \n      data.buffer.push(\"login\");\n      }\n\n      data.buffer.push(\"<!--Fixed navbar-->\\n<div class=\\\"navbar navbar-default navbar-fixed-top\\\">\\n  <div class=\\\"container\\\">\\n    <div class=\\\"navbar-header\\\">\\n      <button type=\\\"button\\\" class=\\\"navbar-toggle\\\" data-toggle=\\\"collapse\\\" data-target=\\\".navbar-collapse\\\">\\n        <span class=\\\"icon-bar\\\"></span>\\n        <span class=\\\"icon-bar\\\"></span>\\n        <span class=\\\"icon-bar\\\"></span>\\n      </button>\\n      \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{\n        \'classNames\': (\"navbar-brand\")\n      },hashTypes:{\'classNames\': \"STRING\"},hashContexts:{\'classNames\': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"index\", options) : helperMissing.call(depth0, \"link-to\", \"index\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n    </div>\\n    <div class=\\\"navbar-collapse collapse\\\">\\n      <ul class=\\\"nav navbar-nav navbar-right\\\">\\n        <li>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"login\", options) : helperMissing.call(depth0, \"link-to\", \"login\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n      </ul>\\n    </div><!--/.nav-collapse-->\\n  </div>\\n</div>\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=crux/templates/application.js");

;eval("define(\"crux/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<div id=\\\"headerwrap\\\">\\n<div class=\\\"container\\\">\\n  <div class=\\\"row\\\">\\n    <div class=\\\"col-lg-6\\\">\\n      <h1>Climbing gear delivered <br>\\n         at the drop of a dime.</h1>\\n      <form class=\\\"form-inline\\\" role=\\\"form\\\">\\n        <div class=\\\"form-group\\\">\\n          <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"exampleInputEmail1\\\" placeholder=\\\"your email address\\\">\\n        </div>\\n        <button type=\\\"submit\\\" class=\\\"btn btn-warning btn-lg\\\">Invite me!</button>\\n      </form>\\n    </div><!--/col-lg-6-->\\n    <div class=\\\"col-lg-6\\\">\\n      <img class=\\\"img-responsive\\\" src=\\\"/static/crux/assets/img/ipad-hand.png\\\" alt=\\\"\\\">\\n    </div><!--/col-lg-6-->\\n\\n  </div><!--/row-->\\n</div><!--/container-->\\n</div><!--/headerwrap-->\\n\\n\\n<div class=\\\"container\\\">\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <h1>Accessing climbing gear<br/>has never been easier</h1>\\n    <h3>Trust us, your apartment will thank you.</h3>\\n  </div>\\n</div><!--/row-->\\n\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-4\\\">\\n    <img src=\\\"/static/crux/assets/img/flat-hotel.svg\\\" width=\\\"180\\\" alt=\\\"store climbing gear\\\">\\n    <h4>1 - Gear Hotel</h4>\\n    <p>Keep your gear (and its smell) with us. We\'ll tuck it in and read it bed time stories until you need it.</p>\\n  </div><!--/col-lg-4-->\\n\\n  <div class=\\\"col-lg-4\\\">\\n    <img src=\\\"/static/crux/assets/img/flat-bank.svg\\\" width=\\\"180\\\" alt=\\\"rent climbing gear\\\">\\n    <h4>2 - Rent it Out</h4>\\n    <p>Save money by renting our gear, or put your own gear to work and save up for that crashpad you always wanted.</p>\\n\\n  </div><!--/col-lg-4-->\\n\\n  <div class=\\\"col-lg-4\\\">\\n    <img src=\\\"/static/crux/assets/img/flat-delivery.svg\\\" width=\\\"180\\\" alt=\\\"deliver climbing gear\\\">\\n    <h4>3 - Door to Door</h4>\\n    <p>As soon as you need it, your gear will be delivered to you at the drop of a dime.</p>\\n\\n  </div><!--/col-lg-4-->\\n</div><!--/row-->\\n</div><!--/container-->\\n\\n<div class=\\\"container\\\">\\n<hr>\\n<div class=\\\"row centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <form class=\\\"form-inline\\\" role=\\\"form\\\">\\n      <div class=\\\"form-group\\\">\\n        <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"exampleInputEmail1\\\" placeholder=\\\"your email address\\\">\\n      </div>\\n      <button type=\\\"submit\\\" class=\\\"btn btn-warning btn-lg\\\">Seriously, invite me!</button>\\n    </form>\\n  </div>\\n  <div class=\\\"col-lg-3\\\"></div>\\n</div><!--/row-->\\n<hr>\\n</div><!--/container-->\\n\\n<div class=\\\"container\\\">\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <h1>Hassle-Free Climbing Gear</h1>\\n    <h3>Worry more about climbing and less about logistics. We\'ll help you manage your stash of gear, so you can focus on having fun.</h3>\\n  </div>\\n</div><!--/row-->\\n\\n<!--CAROUSEL-->\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <div id=\\\"carousel-example-generic\\\" class=\\\"carousel slide\\\" data-ride=\\\"carousel\\\">\\n      <!--Wrapper for slides-->\\n      <div class=\\\"carousel-inner\\\">\\n        <div class=\\\"item active\\\">\\n          <img src=\\\"/static/crux/assets/img/iphone-store.svg\\\" alt=\\\"rent climbing gear on mobile\\\">\\n        </div>\\n        <div class=\\\"item\\\">\\n          <img src=\\\"/static/crux/assets/img/iphone-store.svg\\\" alt=\\\"store your gear with us and rent it out to other climbers\\\">\\n        </div>\\n        <div class=\\\"item\\\">\\n          <img src=\\\"/static/crux/assets/img/iphone-store.svg\\\" alt=\\\"scheduled or immediate delivery of your climbing gear\\\">\\n        </div>\\n      </div>\\n      <!--Indicators-->\\n      <ol class=\\\"carousel-indicators\\\">\\n        <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"0\\\" class=\\\"active\\\"></li>\\n        <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"1\\\"></li>\\n        <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"2\\\"></li>\\n      </ol>\\n    </div>\\n  </div><!--/col-lg-8-->\\n</div><!--/row-->\\n</div><!--/container-->\\n\\n<div class=\\\"container\\\">\\n<hr>\\n<div class=\\\"row centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <form class=\\\"form-inline\\\" role=\\\"form\\\">\\n      <div class=\\\"form-group\\\">\\n        <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"exampleInputEmail1\\\" placeholder=\\\"your email address\\\">\\n      </div>\\n      <button type=\\\"submit\\\" class=\\\"btn btn-warning btn-lg\\\">Invite me already!</button>\\n    </form>\\n  </div>\\n  <div class=\\\"col-lg-3\\\"></div>\\n</div><!--/row-->\\n<hr>\\n</div><!--/container-->\\n\\n<div class=\\\"container\\\">\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-6 col-lg-offset-3\\\">\\n    <h1>We\'re climbers too.</h1>\\n    <h3>Living in New York is cramped enough without an epic pile of smelly climbing gear to greet you daily. We needed a way to store our gear and access it quickly. <br><br> That\'s why we founded crux.</h3>\\n  </div>\\n</div><!--/row-->\\n\\n<div class=\\\"row mt centered\\\">\\n  <div class=\\\"col-lg-12\\\">\\n    <img class=\\\"img-circle\\\" src=\\\"/static/crux/assets/img/pic1.jpg\\\" width=\\\"140\\\" alt=\\\"\\\">\\n    <h4>John Salvatore</h4>\\n    <p>\\\"The best climber in the world is the one who\'s having the most fun\\\"</p>\\n    <p><i class=\\\"glyphicon glyphicon-send\\\"></i> <i class=\\\"glyphicon glyphicon-phone\\\"></i> <i class=\\\"glyphicon glyphicon-globe\\\"></i></p>\\n  </div><!--/col-lg-4-->\\n</div><!--/row-->\\n</div><!--/container-->\\n\\n<div class=\\\"container\\\">\\n<hr>\\n<p class=\\\"centered\\\">crux.nyc - 2015</p>\\n</div><!--/container-->\\n\");\n      \n    });\n  });//# sourceURL=crux/templates/index.js");

;eval("define(\"crux/templates/loading\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<img class=\'abscenter\' src=\'/static/crux/assets/img/loading.gif\' />\\n\");\n      \n    });\n  });//# sourceURL=crux/templates/loading.js");

;eval("define(\"crux/templates/login\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"Sign up\");\n      }\n\n      data.buffer.push(\"<div class=\'container\'>\\n  <div class=\\\"omb_login\\\">\\n    <h3 class=\\\"omb_authTitle\\\">Login or \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"signup\", options) : helperMissing.call(depth0, \"link-to\", \"signup\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h3>\\n    <div class=\\\"row omb_row-sm-offset-3 omb_socialButtons\\\">\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/facebook/\\\" class=\\\"btn btn-lg btn-block omb_btn-facebook\\\">\\n          <i class=\\\"fa fa-facebook visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Facebook</span>\\n        </a>\\n      </div>\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/twitter/\\\" class=\\\"btn btn-lg btn-block omb_btn-twitter\\\">\\n          <i class=\\\"fa fa-twitter visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Twitter</span>\\n        </a>\\n      </div>\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/google-oauth2/\\\" class=\\\"btn btn-lg btn-block omb_btn-google\\\">\\n          <i class=\\\"fa fa-google-plus visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Google+</span>\\n        </a>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"row omb_row-sm-offset-3 omb_loginOr\\\">\\n      <div class=\\\"col-xs-12 col-sm-6\\\">\\n        <hr class=\\\"omb_hrOr\\\">\\n        <span class=\\\"omb_spanOr\\\">or</span>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"row omb_row-sm-offset-3\\\">\\n      <div class=\\\"col-xs-12 col-sm-6\\\">\\n        <form class=\\\"omb_loginForm\\\" action=\\\"\\\" autocomplete=\\\"off\\\" method=\\\"POST\\\">\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-user\\\"></i></span>\\n            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"email\\\" placeholder=\\\"email\\\">\\n          </div>\\n          <span class=\\\"help-block\\\"></span>\\n\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-lock\\\"></i></span>\\n            <input  type=\\\"password\\\" class=\\\"form-control\\\" name=\\\"password\\\" placeholder=\\\"password\\\">\\n          </div>\\n          <span class=\\\"help-block\\\">password error</span>\\n\\n          <button class=\\\"btn btn-lg btn-primary btn-block\\\" type=\\\"submit\\\">Login</button>\\n        </form>\\n      </div>\\n    </div>\\n    <div class=\\\"row omb_row-sm-offset-3\\\">\\n      <div class=\\\"col-xs-12 col-sm-3\\\">\\n        <label class=\\\"checkbox\\\">\\n          <input type=\\\"checkbox\\\" value=\\\"remember-me\\\">Remember Me\\n        </label>\\n      </div>\\n      <div class=\\\"col-xs-12 col-sm-3\\\">\\n        <p class=\\\"omb_forgotPwd\\\">\\n          <a href=\\\"#\\\">Forgot password?</a>\\n        </p>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=crux/templates/login.js");

;eval("define(\"crux/templates/signup\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"Log in\");\n      }\n\n      data.buffer.push(\"<div class=\'container\'>\\n  <div class=\\\"omb_login\\\">\\n    <h3 class=\\\"omb_authTitle\\\">Sign up or \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"login\", options) : helperMissing.call(depth0, \"link-to\", \"login\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h3>\\n    <div class=\\\"row omb_row-sm-offset-3 omb_socialButtons\\\">\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/facebook/\\\" class=\\\"btn btn-lg btn-block omb_btn-facebook\\\">\\n          <i class=\\\"fa fa-facebook visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Facebook</span>\\n        </a>\\n      </div>\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/twitter/\\\" class=\\\"btn btn-lg btn-block omb_btn-twitter\\\">\\n          <i class=\\\"fa fa-twitter visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Twitter</span>\\n        </a>\\n      </div>\\n      <div class=\\\"col-xs-4 col-sm-2\\\">\\n        <a href=\\\"/social-auth/login/google-oauth2/\\\" class=\\\"btn btn-lg btn-block omb_btn-google\\\">\\n          <i class=\\\"fa fa-google-plus visible-xs\\\"></i>\\n          <span class=\\\"hidden-xs\\\">Google+</span>\\n        </a>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"row omb_row-sm-offset-3 omb_loginOr\\\">\\n      <div class=\\\"col-xs-12 col-sm-6\\\">\\n        <hr class=\\\"omb_hrOr\\\">\\n        <span class=\\\"omb_spanOr\\\">or</span>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"row omb_row-sm-offset-3\\\">\\n      <div class=\\\"col-xs-12 col-sm-6\\\">\\n        <form class=\\\"omb_loginForm\\\" action=\\\"\\\" autocomplete=\\\"off\\\" method=\\\"POST\\\">\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-user\\\"></i></span>\\n            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"username\\\" placeholder=\\\"email\\\">\\n          </div>\\n          <span class=\\\"help-block\\\"></span>\\n\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-lock\\\"></i></span>\\n            <input  type=\\\"password\\\" class=\\\"form-control\\\" name=\\\"password1\\\" placeholder=\\\"password\\\">\\n          </div>\\n          <span class=\\\"help-block\\\"></span>\\n\\n          <div class=\\\"input-group\\\">\\n            <span class=\\\"input-group-addon\\\"><i class=\\\"fa fa-lock\\\"></i></span>\\n            <input  type=\\\"password\\\" class=\\\"form-control\\\" name=\\\"password2\\\" placeholder=\\\"confirm password\\\">\\n          </div>\\n          <span class=\\\"help-block\\\">passwords do not match</span>\\n\\n          <button class=\\\"btn btn-lg btn-primary btn-block\\\" type=\\\"submit\\\">Login</button>\\n        </form>\\n      </div>\\n    </div>\\n    <div class=\\\"row omb_row-sm-offset-3\\\">\\n      <div class=\\\"col-xs-12 col-sm-3\\\">\\n        <label class=\\\"checkbox\\\">\\n          <input type=\\\"checkbox\\\" value=\\\"remember-me\\\">Remember Me\\n        </label>\\n      </div>\\n      <div class=\\\"col-xs-12 col-sm-3\\\">\\n        <p class=\\\"omb_forgotPwd\\\">\\n          <a href=\\\"#\\\">Forgot password?</a>\\n        </p>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=crux/templates/signup.js");

;eval("define(\"crux/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/app.jshint.js");

;eval("define(\"crux/tests/crux/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - crux/tests/helpers\');\n    test(\'crux/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'crux/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/crux/tests/helpers/resolver.jshint.js");

;eval("define(\"crux/tests/crux/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - crux/tests/helpers\');\n    test(\'crux/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'crux/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/crux/tests/helpers/start-app.jshint.js");

;eval("define(\"crux/tests/crux/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - crux/tests\');\n    test(\'crux/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'crux/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/crux/tests/test-helper.jshint.js");

;eval("define(\"crux/tests/helpers/resolver\", \n  [\"ember/resolver\",\"crux/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=crux/tests/helpers/resolver.js");

;eval("define(\"crux/tests/helpers/start-app\", \n  [\"ember\",\"crux/app\",\"crux/router\",\"crux/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=crux/tests/helpers/start-app.js");

;eval("define(\"crux/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/router.jshint.js");

;eval("define(\"crux/tests/routes/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/index.js should pass jshint\', function() { \n      ok(true, \'routes/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=crux/tests/routes/index.jshint.js");

;eval("define(\"crux/tests/test-helper\", \n  [\"crux/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=crux/tests/test-helper.js");

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
