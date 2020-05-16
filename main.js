//this is first console log in js file

console.log('Atike');
console.log('my 4. log');
alert("Hello World");

var myFirstVar; 
//bellek üzerinde bir alan oluşturur. (değişken tanımlama)
myFirstVar = "hello Variable world2";

alert(myFirstVar); 
//this line changes next console log data 
myFirstVar = 13;

console.log(myFirstVar);

myFirstVar = "13";
console.log(myFirstVar);

var mySecvar = "7";
console.log(myFirstVar + mySecvar);

console.log(parseInt(myFirstVar) + parseInt(mySecvar));

var total = mySecvar + myFirstVar;
console.log(total);

var myText1 = "Hello";
var myText2 = "world5";
console.log(myText1 + ' ' + myText2);

//-------------------

//boolean and IF statement equak(==)
let myFirstBool = true;

if (myFirstBool = true) {
    alert('myFirstBool değişkeniniz koşulu sağlado');
    console.log('işlem doğru!');
}

//boolean and IF statement with not equal (!=)
myFirstBool = false;

if (myFirstBool != true) {
    let x = 13;
    //console.log(x);
    alert('myFirstBool değişkeniniz koşulu sağladı');
    console.log('işlem doğru!');
}

//results are same on previous and next samples
myFirstBool = 15;

if (myFirstBool != true) {
    alert('myFirstBool değişkeniniz koşulu sağladı');
    console.log('işlem doğru!');
}

let myAge = 40;

if (myAge > 40) {
    console.log('you are an adult');
} else if (myAge > 20) {
    console.log('you are still young!');
} else {
    console.log('you are too young!');
}

//Typeof
myFirstBool = false;
console.log(typeof myFirstBool);
myAge = null;
console.log(typeof myAge);

//array
//non usal usage
//let myFirstArr = new Array;

//Famous usage
let myFirstArr = [];

let Cars = ['Audi', 'BMW', 'Mercedes', '2', 2, 2, "2"];
console.log(Cars);

let fruits = ["apple", "banana", "carrot"];
console.log(fruits);

console.log("---------------------------");

console.log('En sevdiğiniz meyve ' + fruits[0]);

let newFruit = 'orange';
fruits[2] = 'cherry';
fruits[1] = newFruit;
console.log(fruits);

let fruitCount = fruits.length;
console.log(fruitCount);

//pop, push, shift, unshift
let falseBool = false;
let finalArr = ["Germany", "US", newFruit, falseBool];

//arrayName.push();
//Add new number to the end of the way
finalArr.push(13);
console.log(finalArr);


falseBool = true;
finalArr = ["Germany", "US", newFruit, falseBool];
console.log(finalArr);




//------------------------------------------------------------------

