var jumlahAngkot = 10,
    angkotBeroperasi = 6,
    nomorAngkot = 1;

while (nomorAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik');
    nomorAngkot++;
}
for (nomorAngkot = nomorAngkot; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
    console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi');
}