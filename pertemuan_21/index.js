console.log("Basic JavaScript");

//conditional javascript

let firstname = "Jane";
let isMarried = true;

if(isMarried===true){
    console.log(firstname + " is married");
} else {
    console.log (firstname + " is not married");
}

//if else

let umur = 25;
if(umur<13){
    console.log("Kategori anak - anak");
} else if(umur >=13 && umur < 17){
    console.log("Kategori remaja");
} else if(umur >=17 && umur <26){
    console.log("Kategori anak muda");
} else if(umur >=26 && umur <50){
    console.log("Kategori orang dewasa");
}

// switch case

let job = "teacher";
switch (job) {
    case "teacher" : console.log(firstname + " is a teacher");
    break;
    case "driver" : console.log(firstname + " is a driver");
    break;
    case "instructor" : console.log(firstname + " does something else");
    break;
}


switch(true)
{
    case umur < 13:
    console.log("Kategori anak anak");
    break;
    case umur >=13 && umur <17:
    console.log("Kategori remaja");
    break;
    case umur >=17 && umur <26:
    console.log("Kategori anak muda");
    break;
    case umur >=26 && umur <50:
    console.log("Kategori orang dewasa");
    break;
    default : 
    console.log("Lansia");
}


// javascript function

// function helloWorld(){
//     console.log("Hello world function declaration");
// }
// helloWorld();

let age = 20;
let helloWorld = function(nama){
    console.log("Hello nama saya " + nama + ". Umur saya adalah " + age + " tahun");
}
helloWorld("verren");


