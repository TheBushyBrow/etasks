/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'etasks',
    environment: environment,
    contentSecurityPolicy: {'connect-src':"'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyAUZc0Dig0J9hqTBj2NYzWFei5FzRYdJXM",
      authDomain: "etasks-aae57.firebaseapp.com",
      databaseURL: "https://etasks-aae57.firebaseio.com",
      storageBucket: "etasks-aae57.appspot.com",
      messagingSenderId: "1098670847470"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
