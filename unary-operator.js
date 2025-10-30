// unary plus +x
// jika kamu menempatkan unary plus sebelum angka bilangan, tidak akan terjadi apa-apa
let x = 5;
let y = +x;
y; 
// jika kamu menempatkan unary plus ke non-angka bilangan itu akan menjadikan konversi angka, menggunakan Number() function
// boolean 
// false ke 0
// true ke 1
// string 
// object

let s = '10';
+s;

let f = false,
    t = true;
+f; 
+t;
// unary minus -x
// jika kamu mengaplikasikan nya ke angka, angka itu akan menjadi negatif
let x2 = 10;
-x2;

// increment operator ++
// prefix ++x
// postfix x++
// prefix
let age = 25;
++age;
// postfix
age++;

// decrement operator --
// prefix --x
let ages = 25
--ages;
// postfix x--
let agess = 25;
agess--;
