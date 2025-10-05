// 🎯 Destructuring:-
// Destructuring lets you unpack values from arrays or properties from objects into distinct variables.

// >Array Destructuring:
const w = [1, 2, 3];
const [p, q, r] = w; // p=1, q=2, r=3

const s = [1, 2, 3];
const [t, , u] = s; // t=1, skip, u=3

// >object Destructuring:
const obj = { name: "Mahek", age: 35, daughter: "Prokrity" };
/*normally we have to write "obj.name, obj.age etc..." 👆 to access each of this values in a object,
so if we dont want this then here comes the destructuring*/
const { daughter } = obj;
/* 👆 so what it will do, it create a variable named "daughter" and then it 
will take out that value from "obj"*/
