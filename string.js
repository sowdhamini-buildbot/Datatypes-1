// Strings can be enclosed within either single quotes, double quotes or backticks:

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

//  Backticks allow us to embed any expression into the string, by wrapping it in ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
// Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines


// String length:
// The length property has the string length:

alert( `My\n`.length ); // 3
// Note that \n is a single “special” character, so the length is indeed 3.   
// \n means New line

// Accessing characters
// To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// the last character
alert( str[str.length - 1] ); // o

// We can also iterate over characters using for..of:
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// Strings are immutable
// Strings can’t be changed in JavaScript. It is impossible to change a character.
// Let’s try it to show that it doesn’t work:

let str = 'Hi';
str[0] = 'h'; // error
alert( str[0] ); // doesn't work

// Changing the case
// Methods toLowerCase() and toUpperCase() change the case:

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
// Or, if we want a single character lowercased:
alert( 'Interface'[0].toLowerCase() ); // 'i'