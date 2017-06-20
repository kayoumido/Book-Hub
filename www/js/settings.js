app.onPageInit('settings', function(page) {
  hasInternet();

  // set input with api url stored in local storage
  $$('.api-url').val(window.localStorage.getItem('api'));//.addClass('not-empty-state focus-state');

  $$('.save-btn').click(function() {
    window.localStorage.setItem('api', $$('.api-url').val());
    console.log(window.localStorage);
  });
});
