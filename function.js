// function declaration
// returning a value
function say(sms){
  console.log(sms);
}
let result = say('Hello');
console.log(result);
// karena undefined
function add(a,b){
  return a+b;
}
let sum = add(10,20);
console.log(`Sum:`, sum);
// panjang arguments object
function adds(){
  let sums = 0;
  for(let i = 0; i < arguments.length; i++){
    sums += arguments[i];
  }
  return sums;
}
console.log(adds(1,2));
console.log(adds(2,3,5));
// function hoisting
showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}
// function hoisting 2
function showMe() {
  console.log('a hoisting example');
}

showMe(); // a hoisting example
