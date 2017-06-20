app.onPageInit('index', function(page) {
  hasInternet();
  
  var db = new DBHandler();
  var dbh = db.getDBH();

  dbh.transaction(function(tx) {
    tx.executeSql('select * from books', [], function(tx, data) {
      if (data.rows.length == 0) {
        $$('.books').html('Your library is empty. Click on the + to add some books');
        return;
      }

      // update configuration
      Template7.global.internet = config.internet;
      // get template from page
      var template = $$('#book_template').html();
      // compile it with Template7
      var compiledTemplate = Template7.compile(template);
      // insert data into template
      var html = compiledTemplate(data.rows);
      // add it to page
      $$('.books').html(html);

      // set click event on each book in DOM
      $$('.book').each(function() {
        $$(this).click(function() {
          mainView.router.loadPage(`detail.html?id=${$$(this).data('id')}`);
        });
      });

    }, null);
  });
});
