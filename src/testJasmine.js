// console.log( "ready!" );

function Student(libName) {
    this.whichLibrary = libName;
    this.newLib;
};


// Student.prototype.whichLibrary = "WBUT College Library";
// Student.prototype.newLib = "";


function Library() {
    this.libName = "National Library";
};

Library.prototype.getLibrary = function() {
    return this.libName;
};

Student.prototype.getVal = function() {

    var library = new Library();
    this.newLib = library.getLibrary();

    return this.newLib;
};

Student.prototype.setVal = function() {

    console.log("****Setting new Value****");

    this.whichLibrary = this.getVal();
};

var std = new Student("WBUT College Library");

console.log(std.whichLibrary);

std.setVal();

console.log(std.whichLibrary);
