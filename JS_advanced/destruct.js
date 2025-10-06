// 🎯 Destructuring:-
// Destructuring lets you unpack values from arrays or properties from objects into distinct variables.

// >Array Destructuring:
const w = [1, 2, 3];
const [p, q, r] = w; // p=1, q=2, r=3
console.log(p);
console.log(q);
console.log(r);

const s = [1, 2, 3];
const [t, , u] = s; // t=1, skip, u=3

// >object Destructuring:
const obj = { name: "Mahek", age: 35, daughter: "Prokrity" };
/*normally we have to write "obj.name, obj.age etc..." 👆 to access each of this values in a object,
so if we dont want this then here comes the destructuring*/
const { daughter } = obj;
console.log(daughter);  // prokrity
/* 👆 so what it will do, it create a variable named "daughter" and then it 
will take out that value from "obj"*/

// >Using Default Values:

const fruits = ["apple"];

const [first, second = "banana"] = fruits;   /*👈If the second value doesn’t exist, it takes the default.*/
console.log(first, second); // apple banana

// >Array Destructuring with Rest Operator:

const scores = [85, 90, 78, 92];

const [top1, top2, ...others] = scores;

console.log(top1, top2);   // 85 90
console.log(others.join(" "));   // 78 92

// >Object Destructuring:

const user = {
  name: "Mahek",
  age: 25,
  city: "Silchar"
};

const { name, age } = user;
console.log(name, age); // Mahek 25

// >Renaming Variables While Destructuring: (You can rename 👇 variables during destructuring.)

const person = { firstName: "Mahek", city: "Guwahati" };

const { firstName: userName, city: userCity } = person;

console.log(userName, userCity); // Mahek Guwahati

// >Destructuring Function Return Values: (Useful when working with APIs that return arrays.)

let getCoordinates = () => {
  return [25.123, 93.456];
};

const [lat, lon] = getCoordinates();
console.log(lat, lon); // 25.123 93.456

// >Nested Destructuring from API-like Object: (Extract deep values)

const response = {
  user: {
    id: 101,
    info: {
      name: "Mahek",
      profession: "Web-Dev",
    },
  },
};

const {
  user: {
    info: { name, profession },
  },
} = response;

console.log(name);  //Mahek
console.log(profession);  //Web-Dev  
console.log(name, profession);  //Mahek Web-Dev  👈 Quickly access deeply nested API data.

