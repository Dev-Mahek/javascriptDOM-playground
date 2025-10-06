// 🎯 Default Parameters:-

var fune = (prem = 0) => {
  /*that "=0" 👆 is the default parameter [the value can be anything not "0" exactly it  can be 123, 12 etc..],
   like when there is no value passed it will show 0 or whatever you defined as default, 'BUT' not "undefine"*/
  console.log(prem);
};
fune(22); /*👈value give here it will show 22 as print*/
fune();
/* 👆 if we want that when there is no value given and we dont want it to show "undefine" then it must show "0"*/

var greet = (name = "guest") => {
  console.log(`Welcome back user: ${name}!`);
};

greet("Mahek");  // Output: Hello, Roy! 
greet();        // Output: Hello, Guest!

// >Multiple Default Parameters:

let intro = (name = "Unknown", country = "Unknown") => {    /*👈Each parameter has its own default value.*/
  return `Hii i am ${name}, and I am form ${country}.`;
};

console.log(intro("Mahek", "India"));
console.log(intro());

const power = (base, exponent = 2) => base ** exponent;
console.log(power(5));    // Output: 25 (defaults to square)
console.log(power(5, 3)); // Output: 125

// >Default Parameter with Expression:
 function getDiscount(price, rate = price > 100 ? 0.1 : 0.05) {
  return price - price * rate;
}

console.log(getDiscount(150)); // 10% discount → Output: 135
console.log(getDiscount(80));  // 5% discount → Output: 76
