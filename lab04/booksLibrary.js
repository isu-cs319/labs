/**
 * Created by schott on 08.10.16.
 */
// Build library
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

var maxShelfSize;
var lib = constructLibrary();
displayLibrary(lib);


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
    var length = books.length;
    var i;
    for (i = 0; i < length; i++){
        if (books[i].bookID % 4 == 0){
            this.art.books.push(books[i]);
        }
        else if (books[i].bookID % 4 == 1){
            this.science.books.push(books[i]);
        }
        else if (books[i].bookID % 4 == 2){
            this.sport.books.push(books[i]);
        }
        else{
            this.literature.books.push(books[i]);
        }
    }
    maxShelfSize = Math.max(this.art.books.length,this.science.books.length,this.sport.books.length,this.literature.books.length);
}

function constructLibrary(){
var i;
var title;
var books = [];
for (i=0; i<25; i++){
    title = titles[Math.floor(Math.random()*titles.length)] + " "+titles[Math.floor(Math.random()*titles.length)];
    if (i < 5){
        books.push(new Book(i,title,true));
    }
    else{
        books.push(new Book(i,title,false));
    }
    console.log(books[i]);
}
return new Library(books);
}

function displayLibrary(lib){
    populateShelf(lib.literature);
    populateShelf(lib.art);
    populateShelf(lib.science);
    populateShelf(lib.sport);
}

function prepareTable(){
    // Take care of <tr>s
    var tbody = document.getElementById("library").tBodies[0];
    var numRows = tbody.rows.length;
    var trow;
    // Take care of <tr>s
    var i = 0;
    alert(maxShelfSize + " == "+numRows);
    if (maxShelfSize != numRows){
        for (i=0; i< maxShelfSize; i++){
            trow = tbody.insertRow(i);
        }
    }
}

function populateShelf(shelf){
    prepareTable();
    var tbody = document.getElementById("library").tBodies[0];
    var trow;
    var tcell;
    var i;
    for(i=0; i < shelf.books.length; i++){
        trow = tbody.rows[i];
        //alert(trow + "Col index: " + columnIndex);
        tcell = trow.insertCell(-1);
        tcell.innerHTML = shelf.books[i].bookName; // Make this more elaborate
    }
}