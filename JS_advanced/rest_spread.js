// 🎯 Rest and Spread:-  (...spread/rest)

// >Spread:
var a = [1, 2, 4, 6, 77, 78, 12, 1];
var b = [
  ...a,
]; /* 👆 spread operator will sprade or "copy" the value of the element [in this case we have an array as an element]*/
  /* The spread operator "...a" creates a new array.
     All elements from "a" are copied by value into the new array.*/

//OUYPUT: [1, 2, 4, 6, 77, 78, 12, 1]

//💡 If you modify one, the other stays the same:

b.push(4);
console.log(a); // [1, 2, 3]
console.log(b);  // [1, 2, 3, 4]

// a and b contain the same elements.
// But they are stored in different memory locations — two separate arrays.

// ---------------------------------------------------------------------------------------------------------------------------------------------

// >Direct Assignment 👇 without using ...spread operator:(the output may looks sme but what’s happening under the hood is completely differet.)
var a = [1, 2, 4, 6, 77, 78, 12, 1];
var b = a   /*👈 This does not copy the array. 
                  It simply creates another reference (pointer) to the same array in memory.*/

//OUYPUT: [1, 2, 4, 6, 77, 78, 12, 1];

//💡 If you modify one, the other also changes:

b.push(4);
console.log(a); // [1, 2, 3, 4]
console.log(b);  // [1, 2, 3, 4]

// ----------------------------------------------------------------------------------------------------------------------------------------------

// >Merging Arrays with ...spread:

const fruits = ["apple", "banana"];
const moreFruits = ["mango", "orange"];

const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

//OUTPUT: ["apple", "banana", "mango", "orange"]

// >Adding Elements While Copying: (Spread lets you insert values anywhere in the array.)

const base = [2, 3, 4];
const extended = [1, ...base, 5];

console.log(extended); 

//OUTPUT: [1, 2, 3, 4, 5]

// >Copying and Updating an Object: (You can create new objects while updating or adding properties.)

const user = { name: "Mahek", city: "Silchar" };
const updatedUser = { ...user, city: "Guwahati", age: 25 };

console.log(updatedUser);

//OUTPUT: { name: 'Mahek', city: 'Guwahati', age: 25 }

// >Merging Multiple Objects: (like we did before 👆 with array)

const personal = { name: "Roy", age: 23 };
const professional = { job: "Developer", company: "Ayakashi Mind" };

const profile = { ...personal, ...professional };

console.log(profile);

//OUTPUT { name: 'Roy', age: 23, job: 'Developer', company: 'Ayakashi Mind' }

// >Spread with Strings ✨

const word = "MAHEK";
const letters = [...word];

console.log(letters); // ['M', 'A', 'H', 'E', 'K']

//------------------------------------------------------------------------------

// >Rest:
var funf = (x, y, z, ...d) => {
  /* 👆 only 3 parameters*/
  console.log(x, y, z, d); /* 👈 the rest of the arguments will comes under "d",
  [that "d" can be anything any word or letter!]*/
};
funf(
  1,
  2,
  3,
  4,
  5,
  6,
  7
); /* 👆 7 arguments, So if we dont want rest of the arguments to be ignored then we will use "rest ...d" operator*/

// >Rest with Fixed + Variable Arguments

var greet = (user, ...others) => {
  console.log(`hii ${user} how are you doing?`);
  console.log(`And how are you guys doing ${others.join(", ")}`);  /*👈The first argument goes to "user", and the rest are collected into "others".*/
};

greet("Mahek", "Prokrity", "John", "Tokha", "Alice");

/*OUTPUT: hii Mahek how are you doing?
          And how are you guys doing Prokrity, John, Tokha, Alice*/
