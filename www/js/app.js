// Initialize app
var books = new Framework7({
    material: true
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = books.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  // open connection to DB
  var db = window.openDatabase("books", "1.0", "Books DB", 1000000);
  // for dev purposes populate with data
  db.transaction(function(tx) {

    tx.executeSql('DROP TABLE IF EXISTS books');

    tx.executeSql(`
        create table if not exists books (
          id          integer  PRIMARY KEY autoincrement,
          title       text     not null,
          author      text     null,
          cover       text     null,
          favorite    integer  not null,
          read        integer  not null,
          rate        integer  not null,
          isbn        text     not null,
          comment     text     null
        )
    `);
    tx.executeSql(`
        insert into books values (
          null,
          'Jojos - Diamond is unbreakable : Volume 18',
          'Hirohiko Araki',
          'https://books.google.com/books/content/images/frontcover/ZHSZDQAAQBAJ?fife=w300-rw',
          0,
          0,
          10,
          'blablablabla',
          ''
        )
    `);
    tx.executeSql(`
        insert into books values (
          null,
          'Jojos - Diamond is unbreakable : Volume 19',
          'Hirohiko Araki',
          'https://books.google.com/books/content/images/frontcover/ZHSZDQAAQBAJ?fife=w300-rw',
          0,
          0,
          10,
          'blablablabla',
          ''
        )
    `);
    tx.executeSql(`
        insert into books values (
          null,
          'Jojos - Diamond is unbreakable : Volume 20',
          'Hirohiko Araki',
          'https://books.google.com/books/content/images/frontcover/ZHSZDQAAQBAJ?fife=w300-rw',
          0,
          0,
          10,
          'blablablabla',
          ''
        )
    `);
  });
});

books.onPageInit('index', function(page) {
  // create new db connection
  var db = window.openDatabase("books", "1.0", "Books DB", 1000000);

  db.transaction(function(tx) {
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
