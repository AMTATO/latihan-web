var mainLagi = true;
while (mainLagi) {
    // Selamat datang
    alert('Selamat datang dalam permainan Tebak Angka \n\nSilahkan tebak angka mulai dari 1-10 \nAnda diberi 3 kesempatan untuk menebak!');

    // Menangkap pilihan komputer
    var angkaComputer = Math.floor(Math.random() * 10 + 1);
    console.log(angkaComputer);

    var kesempatan = 3;
    while (kesempatan > 0) {

        // Menangkap angka dari player
        var angkaPlayer = prompt('Silahkan masukkan angka tebakan:');

        kesempatan--;

        if (angkaPlayer == angkaComputer && kesempatan > 0) {
            alert('Selamat tebakan Anda BENAR!\nAngka yang dicari adalah ' + angkaComputer);
            break;
        } else if (angkaPlayer < angkaComputer && kesempatan > 0) {
            alert('Angka yang Anda masukkan terlalu RENDAH\nAyo tebak lagi, Anda masih memiliki ' + kesempatan + ' kesempatan');
        } else if (angkaPlayer > angkaComputer && kesempatan > 0) {
            alert('Angka yang Anda masukkan terlalu TINGGI\nAyo tebak lagi, Anda masih memiliki ' + kesempatan + ' kesempatan');
        } else {
            alert('Maaf, jawaban Anda masih belum tepat dan kesempatan Anda telah habis.\nAngka yang dicari adalah ' + angkaComputer);
        }
    }

    // Tampilkan hasilnya
    mainLagi = confirm('Apakah Anda ingin bermain lagi ?');
}
alert('Terima kasih sudah memainkan game ini.');