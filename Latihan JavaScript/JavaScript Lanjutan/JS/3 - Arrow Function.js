// 3.1 Arrow Function

// Function Expression
// const tampilNama = function(nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Ilham'));


// Arrow Function
// const tampilNama = (nama) => { // -> 1 Parameter
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Ilham'));

// const tampilNama = (nama, waktu) => { // -> 2 Parameter
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Ilham', 'Siang'));

// Implicit Return
// const tampilNama = nama => `Halo, ${nama}`; // -> 1 Parameter
// console.log(tampilNama('Ilham'));

// const tampilNama = () => `Halo Dunia`; // -> Tanpa Parameter
// console.log(tampilNama());


// Contoh :
// let mahasiswa = ['Ilham', 'Pradipta', 'Listiyanto'];

// Function Biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);


// Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Mengembalikan Object
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length
// }));
// console.table(jumlahHuruf);


// 3.2 Arrow Function Lanjutan -> Konsep this

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Ilham';
//     this.umur = 22;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur} tahun.`);
//     }
//     return this;
// }
// const ilham = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Ilham';
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur} tahun.`);
//     }
//     return this;
// }
// const ilham = new Mahasiswa();

// Object Literal
// mhs1 = {
//     nama: 'Ilham',
//     umur: 22,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur} tahun.`);
//         console.log(this);
//     }
// }

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Ilham';
//     this.umur = 22;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur} tahun.`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 20000);
//     return this;
// }
// const ilham = new Mahasiswa();

// Contoh 1:
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});