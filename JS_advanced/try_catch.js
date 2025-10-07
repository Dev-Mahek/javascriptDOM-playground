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
  //[Catching unexpected runtime errors prevents your program from crashing.]
  console.log(err);
}

console.log(
  "daughter=Prokrity"
); /*👆 this will also not execute until the above line execute*/

//--------------------------------------------------------------
try {
  console.log("hello world");
  console.log(serfgsdfgsdrfgsg);
} catch (err) {
  console.error("error:", err.name, "-", err.message);
  console.log("hii");
}

/*OUTPUT:hello world
        ❗error: ReferenceError - serfgsdfgsdrfgsg is not defined
        hii
*/

try {
  let num = 10;
  let result = num / 2;
  console.log(result);

  console.log(undefinedVariable); // ReferenceError
} catch (err) {
  console.error("Error caught:", err.name, "-", err.message);
}

/*OUTPUT: 5
          ❗Error caught: ReferenceError - undefinedVariable is not defined
*/

// >Try/Catch with Async/Await:

function getData() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Network error 🌐"), 2000);
  });
}

async function fetchData() {
  try {
    console.log("Fetching data...");
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.error("Caught async error:", error);
  }
}

fetchData();

/*OUTPUT: Fetching data...
          ❗Caught async error: Network error 🌐
*/
