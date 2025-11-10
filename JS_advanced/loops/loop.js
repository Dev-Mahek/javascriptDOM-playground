// ---------to loop in arrays[]-------------

var a = [1, 2, 3, 4, 5, 6];

a.forEach(function (val) {
  //   console.log(val + 2);
});

// ---------to loop in objects{}------------

var b = { name: "Mahek", age: "24", partner: "still waiting😅" };

for (var key in b) {
  //   console.log(key);
  //   console.log(b[key]);
  //   console.log(key, b[key]);
}

// -----------Reverse a string manually--------------

let str = "AYAKASHI";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log("Original:", str);
console.log("Reversed:", reversed);
