// Initialize app
var app = new Framework7({
    material: true
});

var config = {
  devmode       : true,
  internet      : true,
  default_cover : "img/nocover.jpg"
};

Template7.global = {
  internet      : config.internet,
  default_cover : config.default_cover
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

  var dbh = new DBHandler();
  dbh.init();
  dbh.populate();
});
