// Execution Context, Hoisting, & Scope

// Contoh 1:
// var nama = 'Ilham';
// console.log(nama);

// Creation Phase (Fase pembentukan) pada Global Context
// 1. Mengecek apakah ada variabel atau function dalam baris code
// 2. Kalau ada, nama variabel = undefined, nama function = fn() (isi string dari function) -> disebut Hoisting
// 3. JS mendefinisikan window -> Global Object, this -> window


// Execution Phase (Fase eksekusi) -> baris per baris

// Contoh 2:
// var nama = 'Ilham',
//     umur = 22;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya berusia ${umur} tahun`;
// };

// Function membuat Local Execution Context
// Yang di dalamnya juga terdapat Creation dan Execution Phase
// Perbedaanya selain kita bisa mengakses window, kita juga bisa mengakses arguments -> isinya tergantung dari parameter function
// Di dalam Function juga terdapat Hoisting

// Contoh 3:
// var nama = 'Ilham',
//     username = '@_ilhamm';

// function cetakURL(username) {
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// };

// console.log(cetakURL(username));

// Contoh 4:
// function a() {
//     console.log(`Ini a`);

//     function b() {
//         console.log(`Ini b`);

//         function c() {
//             console.log(`Ini c`);
//         }
//         c();
//     }
//     b();
// }
// a();

// Contoh 5:
// function satu() {
//     var nama = 'Ilham';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);


// Closures

// Contoh 1:
// function init() {
//     let nama = 'Ilham';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// };
// init();

// Contoh 2: -> Function Factories
// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// };
// let panggilNama = init();
// panggilNama('Ilham');
// panggilNama('Pradipta');

// Contoh 3: -> Function Factories
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatMalam('Ilham');

// Contoh 4:
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100; // Tidak mempengaruhi variable di dalam function

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());