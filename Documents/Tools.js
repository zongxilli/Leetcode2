//----------------------------------------------------------------------
//=                                Array
//----------------------------------------------------------------------

const a = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes of storage
const b = ['e', 'f', 'g']; // 3*4 = 12 bytes of storage

a.push('push'); // O(1)  Add -> to the end

a.pop(); // O(1)  Delete -> last one

a.shift(); // O(1) Remove -> first one

a.unshift('unshift'); // O(n)  Add -> to the start

a.splice(2, 0, 'splice'); // O(n) Remove < 0 > item(s) -> start from index < 2 >
//                              & Add -> to index < 2 >
a.sort(); // Sort -> alphabetically

a.reverse(); // Reverse

a.indexOf('splice'); // Return -> first index of this item

a.lastIndexOf('splice'); // Return -> last index of this item

a.join(''); // Return Combine to a single string with '' between each element

a.toString(); // Return -> Convert to a string with commas

a.slice(1, 3); // Return -> Slice of array

a.concat(b); // Return -> Combination of a & b

//----------------------------------------------------------------------
//=                                String
//----------------------------------------------------------------------

const s = 'abcde';

s.charAt(2); // Return -> char at index 2

s.indexOf('cd'); // Return -> index of first occurrence of 'cd'

s.lastIndexOf('c'); // Return -> index of last occurrence of 'c'

s.match('bcd'); // Return -> the match index of 'bcd' in 'abcde' which is 1

s.replace('ab', 'aaaa'); // Return -> the new string after replaced 'ab' to 'aaaa'

// Regex
// \w (any number)  \s (space)
// [^\w\s] (not number, letter, space, symbol...)
// [^\w\s]|_ (same as ^    +   low dash _)
s = str.replace(/[^\w\s]|_/g, '');

s.search('cd'); // Return -> index of 'cd' in 'abcde'

s.slice(1, 3); // Return -> a slice of 'abcde' which is 'bc'
s.slice(1);

s.substring(1, 3); // Return -> a substring of 'abcde' which is 'bc'
s.substring(1);

s.toLowerCase(); // Return -> this string lower case version

s.toUpperCase(); // Return -> this string upper case version

s.split(''); // Return -> string Array version

//----------------------------------------------------------------------
//=                              Numbers & Math
//----------------------------------------------------------------------

let num;

//* Properties
num = Number.MAX_VALUE; // The maximum numeric value

num = Number.MIN_VALUE; // The minimum numeric value

num = NaN; // The 'Not a Number' value

num = Number.NEGATIVE_INFINITY; // The negative infinity value

num = Number.POSITIVE_INFINITY; // The positive infinity value

//* Methods
num = 3.1415;

num.toExponential(); // Return -> a string with a rounded number written as exponential notation

num.toFixed(2); // Return -> a string with a specified number of decimals which is '3.14'

num.toPrecision(5); // Return -> a string written with a specified length which is '3.1415'

num.toString(); // Return -> the string version

//* Math
num = -8;

Math.abs(num); // Return -> the absolute(positive) value of x

Math.round(num); // Return -> rounded to the nearest integer

Math.ceil(num); // Return -> rounded up to its nearest integer

Math.floor(num); // Return -> rounded down to its nearest integer

Math.max(num, 1, 2, 3); // Return -> the maximum number

Math.min(num, 1, 2, 3); // Return -> the minimum number

Math.pow(num, 2); // Return -> num^2

Math.sqrt(num); // Return -> square root of num

Math.random(); // Return -> a random number between 0 and 1

//----------------------------------------------------------------------
//=                                  HashTable
//----------------------------------------------------------------------

//* Map
let map = new Map();

map.size;

map.set('Jessie', {
	phone: '213-555-1234',
	address: '123 N 1st Ave',
});

map.has('Jessie'); // true

map.get('Hilary'); // undefined

map.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });

map.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}

map.delete('Raymond'); // false

map.delete('Jessie'); // true

map.clear();

map.forEach(function (value) {
	// do something here
});

map.keys();

map.values();

// map.entries();

//* Set
let set = new Set();

set.size;

set.add('a');

set.has('a');

set.delete('a');

set.clear();

// set.values(); // Return -> all of the values in set as an array

// set.keys();

set.forEach(function (value) {
	// do something here
});

Array.from(set)[0]; // Get the first key of set


//----------------------------------------------------------------------
//=                                  NodeList
//----------------------------------------------------------------------

let head = new NodeList();

head.val = 1;

let head2 = new NodeList(2);

head.next = head2; // 1 -> 2

//----------------------------------------------------------------------
//=                                  Stack
//----------------------------------------------------------------------

let stack = [];

stack.push(1);

stack.pop(); // return -> last element and remove it from the array	
