// 🎯 Rest and Spread:-  (...spread/rest)

// >Spread:
var a = [1, 2, 4, 6, 77, 78, 12, 1];
var b = [
  ...a,
]; /* ☝ spread operator will sprade or "copy" the value of the element [in this case we have an array as an element]*/

// >Rest:
var funf = (x, y, z, ...d) => {
  /* ☝ only 3 parameters*/
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
); /* ☝ 7 arguments, So if we dont want rest of the arguments to be ignored then we will use "rest ...d" operator*/
