// functions sebagai first class ada 3
// 1. menyimpan function ke dalam variabel
function adds(aa,bb){
  return aa+bb;
}
let sums = adds(10,20);
sums;
// 2. dikirim ke function lain sebagai argument
function add(aaa,bbb){
  return aaa+bbb;
}
let sum = add;

function average(aaa,bbb,fn){
  return fn(aaa,bbb)/2;
}
let result = average(10,20,sum);
result;
// 3. mengembalikan nilai dari function lain sebagai nilai atau value
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
  { name: 'iPhone', price: 900 },
  { name: 'Samsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
];

// sort products by name
console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

// sort products by price
console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);
