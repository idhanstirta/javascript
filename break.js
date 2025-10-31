// break in for loop 
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
}
// break in nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break;
    }
    console.log(i, j);
  }
}
// with break statement
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer;
    }
    console.log(i, j);
  }
}
// break in while loop
let i = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}
// break in do while loop
let a = 0;

do {
  a++;
  console.log(a);
  if (a == 3) {
    break;
  }
} while (a < 5);
