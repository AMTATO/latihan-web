// Pengelolaan Penumpang Angkot

var penumpang = [],

    tambahPenumpang = function(namaPenumpang, penumpang) {
        // Jika angkot kosong
        if (penumpang.length == 0) {
            // Tambah penumpang di awal array
            penumpang.push(namaPenumpang);
            // Kembalikan isi array & keluar dari function
            return penumpang;
        } else {
            // Telusuri seluruh kursi dari awal
            for (var i = 0; i < penumpang.length; i++) {
                // Jika ada kursi kosong
                if (penumpang[i] == undefined) {
                    // Tambah penumpang di kursi tersebut
                    penumpang[i] = namaPenumpang;
                    // Kembalikan isi array & keluar dari function
                    return penumpang;
                } else if (penumpang[i] == namaPenumpang) { // Jika sudah ada nama yang sama
                    // Tampilkan pesan kesalahannya
                    console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                    // Kembalikan isi array & keluar dari function
                    return penumpang;
                } else if (i == penumpang.length - 1) { // Jika seluruh kursi telah terisi
                    // Tambah penumpang di akhir array
                    penumpang.push(namaPenumpang);
                    // Kembalikan isi array & keluar dari function
                    return penumpang;
                }

            }
        }

    },

    hapusPenumpang = function(namaPenumpang, penumpang) {
        // Jika penumpang kosong
        if (penumpang.length == 0) {
            // Tampilkan pesan
            console.log('Belum ada penumpang di dalam angkot.');
            // Kembalikan isi array & keluar dari function
            return penumpang;
        } else { // Jika penumpang tidak kosong
            for (var i = 0; i < penumpang.length; i++) {
                if (namaPenumpang == penumpang[i]) { // Jika ada nama di angkot
                    // Hapus penumpang
                    penumpang[i] = undefined;
                    // Kembalikan isi array & keluar dari function
                    return penumpang;
                } else if (i == penumpang.length - 1) { // Jika tidak ada nama di angkot
                    // Tampilkan pesan
                    console.log(namaPenumpang + ' tidak ada di dalam angkot.');
                    // Kembalikan isi array & keluar dari function
                    return penumpang;
                }
            }
        }
    }