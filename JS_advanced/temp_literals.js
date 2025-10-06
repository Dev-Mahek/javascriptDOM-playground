// 🎯 Template Literals:- (backtick ``)

console.log(
  `hii the temperature is -${12 + 12}c° 🥶`
); /*hold "Alt key" and enter "0176" for degree symbol° 😁*/

// >Multi-line Strings: (No need for \n or string concatenation — multiline is natural.)

const message = `
Hello Mahek,
Welcome to Ayakashi Mind Productions!
Let's create something cinematic today 🎬
`;

console.log(message);

// >String Interpolation:

const name = "Mahek";
const age = 23;

const intro = `My name is ${name} and I am ${age} years old.`;
console.log(intro);

// >Template Literals with Functions:

const greet = (name) => {
  return `hello ${name.toUpperCase()}!`;
};

console.log(greet("mahek"));

// >Template Literals with Arrays: (Joining Values)

const skills = ["Photography", "IoT Projects", "Coding"];

const profile = `Roy's Skills: ${skills.join(", ")}`;
console.log(profile);

// >Nested Template Literals:

const user = { name: "Mahek", city: "Silchar" };

const message = `
User Info:
Name: ${user.name}
City: ${user.city}
Status: ${user.city === "Silchar" ? "Local" : "Visitor"}`;  /*👈checks if the user’s city is "Silchar".*/
                                                           /*If true 👉 the expression after the ? runs ("Local")*/
                                                           /*If false 👉 the expression after the : runs ("Visitor")*/
console.log(message);
