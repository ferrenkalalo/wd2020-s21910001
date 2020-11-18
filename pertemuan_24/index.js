//Array

let nilai = [90, 80,75, 100, 85];

for(let i=0;i<nilai.length;i++)
{
    console.log("Nilai = ", nilai[i] + 5);
}
console.log(nilai);

// nilai [2] = 90;
// console.log(nilai[nilai.length-1]);

let john = ["John", "Doe", 33, true];
let ferren = ["ferren", 18, true];
let hillary = ["hillary", 18, true];
console.log(john[john.length - 1]);
console.log(john);

//toString
console.log(john.toString());

//join
console.log(john.join(" - "));

//pop array
john.pop();
console.log(john.join(" - "));

//push array
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift array
john.shift();
console.log(john.join(" - "));

//unshift array
john.unshift("John");
john.unshift("Prof");
console.log(john.join(" - "));

//======================================================================
//splice
john.splice("john");
console.log(john.join(" - "));

//concat
let nama = john.concat(ferren, hillary);
console.log(nama);

//slice
// let hillary = ["hillary", 19, true];
// let ferren = ["ferren", 19, true];
// let kalalo = ["kalalo", 18, true];

console.log(ferren);
console.log(kalalo);

//sort
//let ferren = ["ferren", "hillary", 18, true];
ferren.sort();

console.log(ferren);

let umur = [17, 18, 19, 20, 30];

umur.sort();
console.log(umur);

//reverse
let ferren = ["ferren", "hillary", 18, true];

ferren.reverse();

console.log(ferren);