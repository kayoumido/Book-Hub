class DBHandler {
  constructor() {
    this.dbh = window.openDatabase("books", "1.0", "Books DB", 1000000);
  }

  init() {
    this.dbh.transaction(function(tx) {

      if (config.devmode)
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
    });
  }

  populate() {
    this.dbh.transaction(function(tx) {
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
  }

  getDBH() {
    return this.dbh;
  }
}
