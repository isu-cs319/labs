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
// Load stuff from storage / init library
var lib = JSON.parse(localStorage.getItem("library"));
if (lib == undefined){
    lib = constructLibrary();
}
var user = JSON.parse(localStorage.getItem("user"));
console.log(user);
console.log(lib);

// Display library
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
        tcell = trow.insertCell(-1); // -1 = append to the end
        if (shelf.books[i].borrowedBy != ""){
            tcell.innerHTML = '<div style="background-color:red;" id="'+shelf.books[i].bookID+'" onclick="returnBook(this.id)";>'+shelf.books[i].bookName+'</div>';
        }
        else{
        tcell.innerHTML = '<div id="'+shelf.books[i].bookID+'" onclick="borrowBook(this.id)";>'+shelf.books[i].bookName+'</div>';
        }
    }
}

function findBook(id){
    var i;
    if (id % 4 == 0){
        for(i=0; i < lib.art.books.length; i++){
            if (lib.art.books[i].bookID == id)
                return lib.art.books[i];
        }
    }
    else if (id % 4 == 1){
        for(i=0; i < lib.science.books.length; i++){
            if (lib.science.books[i].bookID == id)
                return lib.science.books[i];
        }
    }
    else if (id % 4 == 2){
        for(i=0; i < lib.sport.books.length; i++){
            if (lib.sport.books[i].bookID == id)
                return lib.sport.books[i];
        }
    }
    else{
        for(i=0; i < lib.literature.books.length; i++){
            if (lib.literature.books[i].bookID == id)
                return lib.literature.books[i];
        }
    }
return -1;
}

function borrowBook(id){
    var book = findBook(id);
    var studentID = user.name;
    if (book.presence == 1){
        // Check if user exceeds limit of 2 borrowed books
        if (user.borrowed1 != "" && user.borrowed2 != ""){
            alert("LIMIT REACHED. User already borrowed " + findBook(user.borrowed1).bookName + " and " + findBook(user.borrowed2).bookName);
            return;
        }
        else if (user.borrowed1 == ""){
            user.borrowed1 = book.bookID;
        }
        else if (user.borrowed2 == ""){
            user.borrowed2 = book.bookID;
        }
        // Finally, borrow book
        book.borrowedBy = studentID;
        book.presence = 0;
    }
    else{
        alert("Book " + book.bookName + " already borrowed by " + studentID);
        return;  // no changes
    }
    // Update Element to borrowed:
    document.getElementById(id).style.backgroundColor = "red";
    document.getElementById(id).onclick = function (){return returnBook(id);};
    alert("Book " + book.bookName + " successfully borrowed by " + studentID);

    //save all to local storage
    localStorage.setItem("library",JSON.stringify(lib));
    localStorage.setItem("user",JSON.stringify(user));
}
function returnBook(id){
    var book = findBook(id);
    var studentID = user.name;
    // Same as person that borrowed book?
    if (book.borrowedBy == studentID){
        // Return book
        book.borrowedBy = "";
        book.presence = 1;
        document.getElementById(id).onclick = function (){return borrowBook(id);};
        document.getElementById(id).style.backgroundColor = "white";
        alert("Book " + book.bookName + " successfully returned by " + studentID);
        // Release from user-side:
        if (user.borrowed1 == id){
            user.borrowed1 = "";
        }
        else{
            user.borrowed2 = "";
        }
    }
    else{
        alert("Book " + book.bookName + " already borrowed by " + studentID);
        return;  // no changes
    }
    // TODO: save updates to local storage
    localStorage.setItem("library",JSON.stringify(lib));
    localStorage.setItem("user",JSON.stringify(user));
}