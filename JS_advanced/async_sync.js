// 🎯 Async and Sync:-

// >Sync:
console.log("Hay");
console.log("Hay2"); /*👈So this a sync code*/
console.log("Hay3"); /*Line by line it will execute*/

// >Async:
console.log("Hii");
console.log("Hii2");
setTimeout(() => {
  /*👆 So this is a "Async" code*/
  console.log(
    "Hii3"
  ); /*👆 This is a "set-time-out function", execute after 2 seconds*/
}, 2000);
console.log("Hii4");

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
