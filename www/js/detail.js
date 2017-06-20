app.onPageInit('detail', function(page) {

  var db  = new DBHandler();
  var dbh = db.getDBH();

  dbh.transaction(function(tx) {
    tx.executeSql('select * from books where id = ?', [page.query.id], function(tx, data) {
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
    var db  = new DBHandler();
    var dbh = db.getDBH();

    dbh.transaction(function(tx) {
      tx.executeSql('delete from books where id = ?', [$$('.book-detail').data('id')], null, null);
      mainView.router.loadPage('index.html');
    });
  });

  $$('.book-detail-container').on('click', '.book-favorite', function() {
    $$(this).toggleClass('favorite');
    // get state 1 = favorite, 0 = not favorite
    let state = $$(this).hasClass('favorite') ? 1 : 0;

    // open connection to db to update book
    var db  = new DBHandler();
    var dbh = db.getDBH();
    dbh.transaction(function(tx) {
      tx.executeSql('update books set favorite = ? where id = ?', [state, $$('.book-detail').data('id')], null, null);
    });
  });

  $$('.book-detail-container').on('click', '.book-read', function() {
    $$(this).toggleClass('read');
    // get state 1 = read, 0 = not read
    let state = $$(this).hasClass('read') ? 1 : 0;

    // open connection to db to update book
    var db  = new DBHandler();
    var dbh = db.getDBH();
    dbh.transaction(function(tx) {
      tx.executeSql('update books set read = ? where id = ?', [state, $$('.book-detail').data('id')], null, null);
    });

  });

});
