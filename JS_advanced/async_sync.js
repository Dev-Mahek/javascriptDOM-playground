// 🎯 Async and Sync:-

// >Sync: (Everything happens in a top-to-bottom order.)
console.log("Hay");
console.log("Hay2"); /*👈So this a sync code*/
console.log("Hay3"); /*JavaScript waits for each line before moving to the next.*/

/*OUTPUT: Hay
          Hay2
          Hay3
*/

// >Async: (It continues executing other lines of code and returns later when the task finishes.)
console.log("Hii");
console.log("Hii2");
setTimeout(() => {
  /*👆 So this is a "Async" code*/
  console.log(
    "Hii3"
  ); /*👆 This is a "set-time-out function", execute after 2 seconds*/
}, 2000);
console.log("Hii4");

//Example:-
//Let’s say you walk into a restaurant 🥗:
/*Synchronous = You order food and stand at the counter until it’s ready. You can’t do anything else until it’s served 😑.
Asynchronous = You order food, get a buzzer, and find a table. You can do other things while waiting for your food. When it’s ready, the buzzer rings 😁 (callback runs).*/

console.log("1. Take order");

setTimeout(() => {
  console.log("2. Cook food (after 2s)");
}, 2000);

console.log("3. Serve water");
console.log("4. Wait for food");

/*OUTPUT: 1. Take order
          3. Serve water
          4. Wait for food      
          2. Cook food (after 2s)
👆 Notice how steps 3 and 4 happen before the delayed step — that’s async behavior!
*/

//If you are using this 👇 then you are writing "Async code":
/*>fetch
  >axios
  >primises
  >settimeout
  >setinterval
*/
//And to get the answer from "Anync code" we use: 👇
/*>Callbacks
  >Then Catch
  >Async Await
*/
