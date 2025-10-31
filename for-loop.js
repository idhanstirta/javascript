// for loop
for (let i = 1; i < 5; i++) {
  console.log(i);
}
// tanpa inisialisasi
let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}
// tanpa kondisi
for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) {
    break;
  }
}
// tanpa statement apapun
let k = 1;
for (;;) {
  if (k > 10) {
    break;
  }
  console.log(k);
  k += 2;
}
// tanpa body
let sum = 0;
for (let l = 0; l <= 9; l++, sum += l);
console.log(sum);  

