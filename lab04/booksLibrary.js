/**
 * Created by schott on 08.10.16.
 */
function Book(id, name, reference) {
    this.bookID = id;
    this.bookName = name;
    this.isReference = reference;
    this.borrowedBy = "";
    this.presence = 1;
}

function Shelf(name) {
    this.books = [];
    this.category = name;
}
function Library(books) {
    this.art = new Shelf("Art");
    this.science = new Shelf("Science");
    this.sport = new Shelf("Sport");
    this.literature = new Shelf("Literature");
    books.forEach(function(book){
        if (book.bookID % 4 == 0){
            this.art.books.push(book);
        }
        else if (book.bookID % 4 == 1){
            this.science.books.push(book);
        }
        else if (book.bookID % 4 == 2){
            this.sport.books.push(book);
        }
        else{
            this.literature.books.push(book);
        }
    });
}
