var jumlahAngkot = 10,
    angkotBeroperasi = 6,
    nomorAngkot = 1;
for (nomorAngkot; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
    if (nomorAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi');
    }
}