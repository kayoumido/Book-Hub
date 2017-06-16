app.onPageInit('detail', function(page) {

  var db = new DBHandler();
  var dbh = db.getDBH();

  dbh.transaction(function(tx) {
    tx.executeSql(`select * from books where id = ${page.query.id}`, [], function(tx, data) {
      // get template from page
      var template = $$('#book-detail-template').html();
      // compile it with Template7
      var compiledTemplate = Template7.compile(template);
      // insert data into template
      var html = compiledTemplate(data.rows[0]);
      // add it to page
      $$('.book-detail-container').html(html);

    }, null);
  });

  $$('.delete-btn').click(function() {
    var db = new DBHandler();
    var dbh = db.getDBH();

    dbh.transaction(function(tx) {
      tx.executeSql('delete from books where id = ?', [$$('.book-detail').data('id')], null, null);
      mainView.router.loadPage('index.html');
    });
  });

});
