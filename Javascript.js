// Prototype Property: Prototype-based Inheritance

function Book() {
  this.country = "United States of America";
  this.isOriginal = true;
}

Book.prototype.showTitleAndFile = function () {
  console.log("This is " + this.name + ", in a " + this.file + " format.");
}
//Add showTitleAndFile method to the Book prototype property

Book.prototype.amIOriginal = function () {
  if (isOriginal)
  console.log("I am original, Baby!");
}
// Add the amIOriginal to the Book prototype property

function Song (songName, songFile) {
  this.name = songName;
  this.file = songFile;
}

Song.prototype = new Book ();
// Set song prototype to Book's Constructor, inheriting all of Books.prototype methods and properties

var aFinesse = new Song ("Finesse", "Flac");
// creates a new object, aFinesse, with the use of Song Constructor

console.log(aFinesse.name);
// Finesse
console.log(aFinesse.file);
// Flac

console.log(aFinesse.showTitleAndFile());
// This is Finesse, in a Flac format.


//Prototype Attribute: Accessing Properties on Objects
var myFamily = {name: "Pete"};
// Search and will find immediately the property because it is defined.

console.log(myFamily.name);
// Pete

myFamily.toString ();
// All object are created with object literal inherits, toString method will be found on Object.prototype.


// Object.prototype Properties Inherited by all Objects
function People () {
this.superstar = "Michael Jackson";
}

People.prototype.athlete = "Tiger Woods";
// define "athlete" Property

var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";
// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly(literal) on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log (famousPerson.superstar);
// Steve Jobs

console.log (famousPerson.athlete);
// Tiger Woods
//Tiger Woods is defined on athlete property and not define on famousPerson,

console.log (famousPerson.toString());
// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.

//Prototypal inheritance __proto__ , which is ascient, new method is "prototype.showTitleAndFile"
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
// sets rabbit.[[Prototype]] = animal
// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

alert( rabbit.eats );
// true (**)
//Here the line (*) sets animal to be a prototype of rabbit. Then, when alert tries to read property rabbit.eats (**), it’s not in rabbit, so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up):
alert( rabbit.jumps );
// true


function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8
