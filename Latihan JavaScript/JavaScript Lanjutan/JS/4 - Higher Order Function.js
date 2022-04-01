// 4.2 Filter, Map & Reduce

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >3 -> Menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// Mencari angka >3 -> Menggunakan Filter & Arrow Function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka)

// Mencari angka *2 -> Menggunakan Map & Arrow Function
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka)

// Menjumlahkan nilai di dalam array -> Menggunakan Reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// Method Chaining -> Cari angka > 5, Kalikan 3, Jumlah
// const hasil = angka.filter(a => a > 5) //8,9,9
//     .map(a => a * 3) // 24,27,27
//     .reduce((acc, cur) => acc + cur); //78
// console.log(hasil);





// 4.3 Latihan Filter, Map & Reduce

// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // Ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    // Ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 10.30 -> [10,30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60 + parts[1]);
    })

    // Jumlah semua detik
    .reduce((total, detik) => total + detik);

// Ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = jsLanjut - ((jam * 3600) + (menit * 60));

// Simpan DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;


console.log(detik);