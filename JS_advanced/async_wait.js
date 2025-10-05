// 🎯 Async await:-

// Async/Await lets you write asynchronous code that looks synchronous.
// Adding 'async' makes the function return a Promise implicitly.
var abcd = async () => {
  // 'await' pauses here until the Promise returned by fetch resolves (or rejects).
  // fetch() performs an HTTP request and resolves to a Response object.
  let raw = await fetch(
    "https://randomuser.me/api/"
  ); /*wait for this liine ☝ to exceute then move to the below 👇 lines*/
  /*
    At this point 'raw' is a Response. It still needs to be parsed.
    Using 'await' again waits for the body to be read and converted to JSON.
    Note: raw.json() itself returns a Promise that resolves to a JS object.
  */
  let ans = await raw.json();

  // The parsed data (object) from the API
  console.log(ans);

  /*
    Best practice (not implemented here to keep the example minimal):
    - Wrap the awaits in try/catch to handle network errors and JSON parse errors.
    - Optionally check raw.ok (status 200-299) before parsing:
        if (!raw.ok) { throw new Error(`HTTP ${raw.status}`) }
  */
};
abcd();
