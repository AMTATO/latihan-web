function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const karyawan = {
  nama: "Listiyanto",
  umur: 23,
  cetakKaryawan() {
    return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
  },
};

class Manusia {
  constructor() {
    console.log("Class manusia telah dibuat!");
  }
}

// Cara Export Module

// <- 1 ->  
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.karyawan = karyawan;
// module.exports.Manusia = Manusia;

// <- 2 ->
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   karyawan: karyawan,
//   Manusia: Manusia,
// };

// <- 3 : ES6 ->
module.exports = {cetakNama, PI, karyawan, Manusia};