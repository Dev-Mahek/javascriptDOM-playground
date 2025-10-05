// 🎯 Try catch:- ( is a statement used for error handling. It allows for the execution of code that might throw an erro)

// example:
console.log("i am Mahek"); /*👈this will execute*/

// console.log(wife); /*👈this will not execute(error) so we have to use "try and catch" to execute the below lines of code*/

try {
  /*in "try" we will give that value which may through an error which is "wife" in here*/
  console.log(
    wife
  ); /*this will handel the error and execute the remaining code*/
} catch (err) {
  /*in "catch" we will console log that error so that the above lines of code can be executed without any issue*/
  console.log(err);
}

console.log(
  "daughter=Prokrity"
); /*👆 this will also not execute until the above line execute*/
