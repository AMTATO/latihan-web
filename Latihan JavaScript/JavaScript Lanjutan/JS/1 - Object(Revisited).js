// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
// Problem -> Tidak efektif untuk object yang banyak

// let mahasiswa = {
//     nama: `Ilham`,
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// };
// let mahasiswa2 = {
//     nama: `Pradipta`,
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// };


// 2. Function Declaration

// function mahasiswa(nama, energi) {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;

//     mhs.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mhs.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
//     return mhs;
// };

// let ilham = mahasiswa(`Ilham`, 10);
// let pradipta = mahasiswa(`Pradipta`, 10);


// 3. Constructor Function -> keyword new

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// };

// let ilham = new Mahasiswa(`Ilham`, 10);


// 4. Object.creater
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function mahasiswa(nama, energi) {
//     let mhs = Object.create(methodMahasiswa);
//     mhs.nama = nama;
//     mhs.energi = energi;

//     return mhs;
// };

// let ilham = mahasiswa(`Ilham`, 10);
// let pradipta = mahasiswa(`Pradipta`, 10);


// 5. Prototype
// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype); -> Yang terjadi di belakang layar
//     this.nama = nama;
//     this.energi = energi;

//     // return this; -> Yang terjadi di belakang layar
// };

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let ilham = new Mahasiswa('Ilham', 10);


// 6. Class 
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}