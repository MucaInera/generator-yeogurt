// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Create application namspace
var App = App || {
  Views: {},
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {}
};

(function() {

  // Initialize routes and create global reference to router
  App.router = new App.Routers.Main();

  // Start listening to route changes
  Backbone.history.start();

  // Set up global click event handler to use pushState for links
  // use 'data-bypass' attribute on anchors to allow normal link behavior
  $(document).on('click', 'a:not([data-bypass])', function(event) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      event.preventDefault();
      App.router.navigate(href, true);
    }

  });

  console.log('Welcome to Yeogurt');

})();
