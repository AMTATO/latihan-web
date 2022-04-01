// Suit Jawa

var mainLagi = true;
while (mainLagi) {
    // Menangkap pilihan player
    var player = prompt('Pilih : Gajah, Semut, Orang');

    // Membangkitkan pilihan random
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'Gajah';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'Semut';
    } else {
        computer = 'Orang';
    }

    // Menentukan rules
    var hasil = '';

    if (player == computer) {
        hasil = 'SERI!';
    } else if (player == 'Gajah') {
        hasil = (computer == 'Orang') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'Orang') {
        hasil = (computer == 'Gajah') ? 'KALAH!' : 'MENANG!';
    } else if (player == 'Semut') {
        hasil = (computer == 'Orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!!';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + player + '\nKomputer memilih : ' + computer + '\nMaka hasilnya : Kamu ' + hasil);

    mainLagi = confirm('Apakah Anda ingin bermain lagi ?');
}
alert('Terima kasih sudah memainkan game ini.');