

//Array:Arrays in JavaScript are the data type used to store a list of values.array starts with [0] and end with [n] value.The items in an array are enclosed within square brackets.
let fruits = ["Apple", "Orange", "Plum"];

//get array length: The total count of the elements in the array is its length:
console.log(fruits.length);

//get array value
console.log(fruits[1]);

//change array element
fruits[0]= "guva";
console.log(fruits[0]);

//pop:extracts an item from the end
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

//push:adds items to the end
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

//shift:extracts an item from the beginning
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

//unshift:adds items to the beginning
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

//delete an element from the array 
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3
// The element was removed, but the array still has 3 elements, we can see that arr.length == 3. because delete obj.key removes a value by the key.So, special methods should be used.

// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
// The syntax is:
// arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]
// In the next example we remove 3 elements and replace them with the other two:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

// slice
// The method arr.slice is much simpler than similar-looking arr.splice.
// The syntax is:

arr.slice([start], [end])
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

//concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.
// The syntax is:

// arr.concat(arg1, arg2...)
// let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.

// The syntax:
// arr.forEach(function(item, index, array) {
  // ... do something with item
// });
// For instance, this shows each element of the array:

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// Searching in array
// Now let’s cover methods that search in an array.

// indexOf/lastIndexOf and includes
// The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
// For instance:

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

// Transform an array
// Let’s move on to methods that transform and reorder an array.

// map
// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });
// For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// sort(fn)
// The call to arr.sort() sorts the array in place, changing its element order.

// It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

// For instance:

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2


// reverse
// The method arr.reverse reverses the order of elements in arr.

// For instance:

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1

//split and join
// The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

// In the example below, we split by a comma followed by space:

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}