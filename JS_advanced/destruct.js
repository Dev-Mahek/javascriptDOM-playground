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

// >
