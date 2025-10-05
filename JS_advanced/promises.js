// 🎯 Promises-

var ans = new Promise((res, rej) => {
  if (true) {
    return res();
  } else {
    return rej();
  }
});

ans
  .then(function () {
    /* 👆 The then() method schedules a function to run when the promise is successfully resolved.
    It returns a new promise, which allows you to chain multiple asynchronous operations together in a sequence.*/
    console.log("resolved");
  })
  .catch(function () {
    /* 👆 The catch() method schedules a function to run when the promise is rejected due to an error (Error handling). 
    It provides a clean way to handle failures in a promise chain without interrupting the application */
    console.log("rejected");
  });
// ---------------------------------------------
var anns = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});

anns
  .then(function () {
    console.log("below");
  })
  .catch(function () {
    console.log("above");
  });
// -----------------------------------------------

var pns = new Promise((res, rej) => {
  return res(
    "first come to home"
  ); /*First create promise ☝ no.1 for the '1st task' which is "come home first" then....*/
});

var pns2 = pns.then(function (data) {
  /*in here instead of 👆 "data" we can write anything here*/
  console.log(data); /* 👈 console loging the 1st promise data or task*/
  return new Promise((res, rej) => {
    return res(
      "open the gate and close the gate"
    ); /*and when the '1st promise' gets resolved the cretae '2nd promise' 
        👆 under ".then state" for "2nd task"*/
  });
});

var pns3 = pns2.then(function (data) {
  console.log(
    data
  ); /* 👆 console loging the 2nd promise data or task and creating another promise*/
  return new Promise((res, rej) => {
    return res("eat your food"); /* 👈 3rd task*/
  });
});

pns3.then(function (data) {
  console.log(data); /* 👈 console loging the 3rd promise data or task*/
});
