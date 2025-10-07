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

var greet = async () => {
  console.log("before await...");

  await new Promise((res) => setTimeout(res, 2000));

  console.log("after 2 second 🎯");
};

greet();

// >Using Async/Await with Multiple Tasks:

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Roy", city: "Silchar" }), 2000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1500);
  });
}

async function showData() {
  console.log("Fetching data...");

  const user = await fetchUser();      /*👈Runs sequentially — waits for each await to complete before continuing.*/
  const posts = await fetchPosts();

  console.log("User:", user);
  console.log("Posts:", posts);
}

showData();

/*OUTPUT: Fetching data...
          (after ~3.5s)
          User: { name: 'Roy', city: 'Silchar' }
          Posts: [ 'Post 1', 'Post 2' ]
*/
