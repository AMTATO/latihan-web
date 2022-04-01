// Destructuring Array 

// const perkenalan = ['Halo', 'nama', 'saya', 'Ilham Pradipta'];

// const [salam, satu, dua, nama] = perkenalan; -> Menampilkan semua
// const [salam, , , nama] = perkenalan; -> Skip Item
// console.log(salam);


// Swap item
// let a = 1,
//     b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// Return value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);


// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// Destructuring Object


// const mhs = {
//     nama: 'Ilham Pradipta',
//     umur: 22
// }
// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);


// Assigment tanpa deklarasi object
// ({
//     nama,
//     umur
// } = {
//     nama: 'Ilham Pradipta',
//     umur: 22
// });
// console.log(nama);


// Assignment ke variabel baru
// const mhs = {
//     nama: 'Ilham Pradipta',
//     umur: 22
// }
// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//     nama: 'Ilham Pradipta',
//     umur: 22,
//     email: 'ilham.25@students.amikom.ac.id'
// }
// const {
//     nama,
//     umur,
//     email = 'email@default.com'
// } = mhs;
// console.log(email);

// Memberikan Default Value + Assignmen ke variable baru
// const mhs = {
//     nama: 'Ilham Pradipta',
//     umur: 22,
//     email: 'ilham.25@students.amikom.ac.id'
// }
// const {
//     nama : n,
//     umur : u,
//     email : e = 'email@default.com'
// } = mhs;
// console.log(email);

// Rest Parameter
// const mhs = {
//     nama: 'Ilham Pradipta',
//     umur: 22,
//     email: 'ilham.25@students.amikom.ac.id'
// }
// const {
//     nama,
//     ...values
// } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai peramaetre untuk function
// const mhs = {
//     id: 123,
//     nama: 'Ilham Pradipta',
//     umur: 22,
//     email: 'ilham.25@students.amikom.ac.id'
// }

// function getIdMhs({
//     id
// }) {
//     return id;
// };
// console.log(getIdMhs(mhs));



// Destructuring Function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }
// const {
//     bagi,
//     kurang,
//     tambah,
//     kali
// } = kalkulasi(2, 3);
// console.log(kali);


// Destructuring Function Arguments
const mhs1 = {
    nama: 'Ilham Pradipta',
    umur: 22,
    email: 'ilham.25@students.amikom.ac.id',
    nilai: {
        tugas: 100,
        uts: 80,
        uas: 90
    }
}

// Tidak menggunakan distructuring
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berusia ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// Manggunakan distructuring
function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakMhs(mhs1));