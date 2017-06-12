app.onPageInit('add', function(page) {
  $$('.search-btn').click(function() {

    let isbn = '9782253031338';//'9780716604891';// $$('.search').val();

    // api request example https://www.googleapis.com/books/v1/volumes?q=isbn:9782253031338
    $$.ajax({
      url       : 'https://www.googleapis.com/books/v1/volumes',
      method    : 'GET',
      dataType  : 'json',
      cache     : false,
      data      : {
        q : `isbn:${isbn}`
      },
      success   : function(data) {
        // get book info
        let book  = data.items[0].volumeInfo;
        // try and get cover, if it doesn't exist, use default one
        let cover = book.imageLinks == null ? "img/nocover.jpg" : book.imageLinks.thumbnail;

        // ${book.imageLinks.thumbnail}
        app.modal({
          title:  `${book.title}`,
          text: `
          <div class="row book no-shadow">
            <div class="col-35 book-cover">
              <img src="${cover}" alt="">
            </div>
            <div class="col-65 book-info">
              <div class="book-author">${book.authors[0]}</div>
            </div>
          </div>`,
          buttons: [
            {
              text: 'Cancel',
              onClick: function() {

              }
            },
            {
              text: 'Import',
              onClick: function() {
                  importBook(book, isbn);
              }
            }
          ]
        });
      },
      error     : function(xhr) {
        console.error(`readyState:      ${xhr.readyState}`);
        console.error(`status:          ${xhr.status}`);
        console.error(`responseText:    ${xhr.responseText}`);
      }
    });
  });
});

function importBook(book, isbn) {
    let cover  = book.imageLinks == null ? "img/nocover.jpg" : book.imageLinks.thumbnail;
    let author = book.authors == null ? "Unknown" : book.authors[0];

    var db = new DBHandler();
    var dbh = db.getDBH();

    // insert book
    dbh.transaction(function(tx) {
      tx.executeSql('INSERT INTO books VALUES (?,?,?,?,?,?,?,?,?)',[
          null,
          book.title,
          author,
          cover,
          0,
          0,
          0,
          isbn,
          ''
      ]);
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      
    });
}
