const cars = ["kia", "volvo", "mazda", "volskwagen","volvo", "mercedez", "chevrolet"];
const sportCars = ["bugatti", "lamborghini", "Ferrari", "jaguar", "masseratti", "porshe"];
const ages = [32, 33, 16, 40];
const myArr = [[1,2],[3,4],[5,6]];
const myArr2 = [1, 2, 3, 4, 5, 6];

//LENGTH: the length property returns the length (size) of an array.
cars.length; //=6

//AT: the at() method returns an indexed element from an array.
let mazdita = cars.at(2); // mazda

//CONCAT: the concat() method creates a new array by merging (concatenating) existing arrays.
const everyCars = cars.concat(sportCars); // ambas listas en una cars+sportCars

//CONSTRUCTURE: the constructor property returns the function that created the Array prototype.
let text = sportCars.constructure;

//COPYWITHIN: the copyWithin() method copies array elements to another position in an array.
cars.copyWithin(3, 0, 3); // "kia", "volvo", "mazda", "kia", "mercedez", "chevrolet"

//ENTRIES: the entries() method returns an Iterator object with the key/value pairs from an array.
const list = cars.entries();
let text2 = "";
for (let x of list) {
  text += x;
}

//EVERY: the every() method executes a function for each array element.
function checkAge(age) {
    return age > 18;
}
  
ages.every(checkAge);

//FILL: the fill() method fills specified elements in an array with a value.
cars.fill(kia, 2, 3);

//FILTER: the filter() method creates a new array filled with elements that pass a test provided by a function.
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

//FIND: the find() method returns the value of the first element that passes a test.
function checkAge(age) {
    return age > 18;
}
ages.find(checkAge);

//FINDINDEX: the findIndex() method executes a function for each array element.
ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

//FINDLAST: the findLast() method returns the value of the last element that passes a test.
ages.findLast(checkAge);

//FINDLASTINDEX: the findLastIndex() method executes a function for each array element.
ages.findLastIndex(checkAge);

//FLAT: the flat() method concatenates sub-array elements.
const newArr = myArr.flat();

//FLATMAP: the flatMap() method maps all array elements and creates a new flat array.
const newArr2 = myArr2.flatMap(x => [x, x * 10]);

//FOREACH: the forEach() method calls a function for each element in an array.
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

//INCLUDES: the includes() method returns true if an array contains a specified value.
cars.includes("ferrari", 4);

//INDEXOF: the indexOf() method returns the first index (position) of a specified value.
let pos = cars.indexOf("kia");

//JOIN: the join() method returns an array as a string.
let join = cars.join("and");

//KEYS: the keys() method returns an Iterator object with the keys of an array.
const keys = cars.keys();

let text3 = "";
for (let x of list) {
  text += x + "<br>";
}

//LASTINDEXOF: the lastIndexOf() method returns the last index (position) of a specified value.
let index = cars.lastIndexOf("volvo");

//MAP: map() creates a new array from calling a function for every array element.
const listaNueva = ages.map(Math.sqrt);

//POP: the pop() method removes (pops) the last element of an array.
let loEchamos = sportCars.pop();

//PUSH: the push() method adds new items to the end of an array.
let nuevo = sportCars.push("tesla");

//REDUCE: the reduce() method executes a reducer function for array element.
const numeros = [175, 50, 25];
numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}

//REDUCERIGHT: the reduceRight() method executes a reducer function for each array element.
numbers.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}

//REVERSE: the reverse() method reverses the order of the elements in an array.
let reverso = sportCars.reverse();

//SHIFT: the shift() method removes the first item of an array.
let loEchamos2= cars.shift();

//SLICE: the slice() method returns selected elements in an array, as a new array.
const feos = cars.slice(2, 6);

//SOME: the some() method checks if any array elements pass a test (provided as a callback function).
ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

//SORT: the sort() method sorts the elements of an array.
sportCars.sort();

//SPLICE: the splice() method adds and/or removes array elements.
cars.splice(0, 1, "subaru", "ford");

//TOLOCALESTRING: the toLocaleString() method returns a Date object as a string, using locale settings.
const d = new Date();
let texto = d.toLocaleString();

//TOSTRING: the toString() method returns a string with array values separated by commas.
let texto1 = d.toString();

//UNSHIFT: the unshift() method adds new elements to the beginning of an array.
cars.unshift("subaru","ford");

//VALUES: the values() method returns an Iterator object with the values of an array
const lista = sportCars.values();

// List the Values
let texto2 = "";
for (let x of list) {
  text += x + "<br>";
}