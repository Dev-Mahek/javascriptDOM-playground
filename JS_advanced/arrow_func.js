// 🎯 Arrow Functions:- >Basic Fat Arrow Fun  >Fat Arrow Fun with one parameter  >Fat Arrow Fun with implicit return

// >Basic Fat Arrow Fun:-
var fun = () => {};
// >Fat Arrow Fun with one parameter:-(if we want then we can remove those fat brackets() in case of one value marameter)
var funb = (parame) => {
  console.log(parame);
};
funb(12);
// for 2 value we have to add another parameter as well as we have to add this brackets () now:
var funbb = (parame, huie) => {};
funb(12, 13);
// >Fat Arrow Fun implicit return:-(after arrow whatever is written will return)
var fund = () => 12;
console.log(
  fund()
); /*the value "12"☝ is now in "fund()" so we will console.log it to see the value*/
