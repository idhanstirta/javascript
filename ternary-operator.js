// ternary operator ?:
let age = 20;
let message;
message = age >= 20 ? 'you win' : 'you lose';

let ages = 25;
let messages;
ages >= 25 ? (messages = "winner") : (messages = "loser");
// multiple statement
// let authenticated = true;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');
// nextURL;

// multiple  ternary operator
let speed = 90;
let message2 = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
message2;
