app.onPageInit('index', function(page) {
  
  var db = new DBHandler();
  var dbh = db.getDBH();

  dbh.transaction(function(tx) {
    tx.executeSql('select * from books', [], function(tx, data) {
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
          alert($$(this).data('id'));
        });
      });

    }, null);
  });
}).trigger();
