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

// >Promise with Timeout:

const delay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Waited 2 seconds ⏱️");
  }, 2000);
});

delay.then((message) => console.log(message));

// >Handling Promise Errors: (Always use .catch() to handle rejected promises.)

var err = () => {
  return new Promise((res, rej) => {
    const success = false;

    setTimeout(() => {
      if (success) {
        res("data fetched");
      } else {
        rej("failed to fetch");
      }
    }, 2000);
  });
};

err()
  .then((data) => {
    console.log(data);
  })

  .catch((data) => {
    console.log(data);
  });

// >Race Between Promises:

const fast = new Promise((resolve) => setTimeout(() => resolve("Fast one 🚀"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow one 🐢"), 3000));

Promise.race([fast, slow]).then((result) => console.log(result));  
/*👆Promise.race() returns the first promise that finishes.*/

//OUTPUT: Fast one 🚀

// >Running Multiple Promises in Parallel: (Runs in parallel, 👇 not sequentially.)

const p1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 ✅"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 ✅"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 ✅"), 1500));

Promise.all([p1, p2, p3]).then((results) => {   /*👈Use Promise.all() to wait for all promises to finish.*/
  console.log("All done:", results);
});

//OUTPUT: All done: [ 'Task 1 ✅', 'Task 2 ✅', 'Task 3 ✅' ]
