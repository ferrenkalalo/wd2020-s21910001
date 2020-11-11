console.log("Hello JavaScript");
//mendeklarasi variabel pake let & const
//let = letter
let umur = 18;
let nama = "Verren Hillary";
nama = "sherren";
console.log(umur);
console.log(nama);
let nilai = 19.2;
let sudahMenikah = false;

let alamat;
console.log(alamat);

//const = constanta
const tahunLahir = 2002;
console.log(tahunLahir);

//------- Operator -----------

//aritmetika(+,-,*,/)

let angka1 = 10;
let angka2 = 20;
console.log(angka1+angka2);

let namaDepan = "Sherren";
let namaBelakang = "Brenda";
console.log("Nama saya " + namaDepan + " " + namaBelakang + ". Umur saya adalah " + umur + " tahun");

// operator perbandingan

let angka11 = 10;
let angka22 = 9;
console.log(angka11 <= angka22);

//ternary operator
let angka = 5;
let hasil = angka <= 0 ? "negatif" : "positif";
console.log(hasil);

//operator logika
let kondisi1 = true;
let kondisi2 = false;
console.log(kondisi1 && kondisi2);

//minta user input

// let inputAngka = prompt("Masukan angka = ");
// console.log("Angka yang di masukan adalah = " + inputAngka);

// exercise7 : buat program untuk menghitung BMI. Rumus = berat (kg) / (tinggi x  tinggi)

let berat = prompt("Masukan berat badan (kg) = ");
let tinggi = prompt("Masukan tinggi (m) = ");
let tinggiB = tinggi * tinggi;
let BMI = berat / tinggiB;
console.log("BMI anda = " + BMI);

function BMIclassification(){
    if(BMI<18.5){
        console.log("Kategori : Underweight");
    } else if(BMI >=18.5 && BMI <= 24.9){
        console.log("Kategori : Normal");
    } else if(BMI >=25 && BMI <= 29.9){
        console.log("Kategori : Overweight");
    } else if(BMI >=30){
        console.log("Kategori : Obesitas");
    } 
}

BMIclassification();