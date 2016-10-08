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


var titles =   [
"exotic",
"dispensable",
"ossified",
"cold",
"seashore",
"needle",
"language",
"polish",
"sable",
"steel",
"thaw",
"object",
"bewildered",
"pine",
"quarrelsome",
"careful",
"eye",
"reduce",
"territory",
"knot",
"fly",
"unadvised",
"whistle",
"man",
"expansion",
"itch"];

var i;
var title;
var books = [];
for (i=0; i<25; i++){
    title = titles[Math.floor(Math.random()*titles.length)];
    if (i < 5){
        books.push(new Book(i,title,true));
    }
    else{
        books.push(new Book(i,title,false));
    }
    console.log(books[i]);
}
var lib = new Library(books);
console.log(lib);