class PrintEditionItem {
  
  constructor(name, releaseDate, pagesCount, state = 100) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state (state) {
    if (state < 0) {
      this._state = 0;
    } 
    else if (state > 100) {
      this._state = 100;
    }
    else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
  
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}


// Задача 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let foundType = this.books.find(book => book[type] === value);
    
    if (!foundType) {
      return null;
    } else {
      return foundType;
    }
  }

  giveBookByName(bookName) {
    const foundIndex = this.books.findIndex(book => book.name == bookName);    
    if (foundIndex === -1) {
      return null;
    } else {
      return this.books.splice(foundIndex, 1);
    }
  }

}
