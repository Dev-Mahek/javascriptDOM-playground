// 🎯 Default Parameters:-

var fune = (prem = 0) => {
  /*that "=0" 👆 is the default parameter [the value can be anything not "0" exactly it  can be 123, 12 etc..],
   like when there is no value passed it will show 0 or whatever you defined as default, 'BUT' not "undefine"*/
  console.log(prem);
};
fune(22); /*👈value give here it will show 22 as print*/
fune();
/* 👆 if we want that when there is no value given and we dont want it to show "undefine" then it must show "0"*/
