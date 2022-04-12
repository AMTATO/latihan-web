<?php
// Pertemuan 4 -> Function
// Built-in Function
// Date/Time : 
// date() -> Menampilkan tanggal dengan format tertentu
// echo date("l, d-M-Y");

// time()
// UNIX Timestamp / EPOCH time -> Detik yang sudah berlalu sejak 1 Januari 1970
// echo time();
// echo date("l, d M Y", time()-60*60*24*365);

// mktime() -> Membuat sendiri detik
// mktime(0,0,0,0,0,0) -> jam, menit, detik, bulan, tanggal, tahun
// echo date("l, d M Y", mktime(0,0,0,11,25,1999));

// strtotime()
// echo date("l, d M Y", strtotime("25 nov 1999"));

// String :
// strlen() -> Untuk menghitung panjang sebuah string
// strcmp() -> Untuk membandingka dua buah string
// explode() -> Untuk memecah sebuah string menjadi array -> Digunakan untuk mengambil nama sebuah file
// htmlspecialchars() -> Function khusus untuk menjaga kita dari orang yang ingin masuk ke web kita

// Utility :
// var_dump() -> Untuk mencetak isi dari sebuah variabel
// isset() -> Untuk mengecek apakah sebuah variabel sudah pernah dibuat atau belum
// empty() -> Untuk mengecek apakah variabel yang ada sudah berisi atau belum
// die() -> Untuk memberhentikan program kita
// sleep() -> Untuk memberhentikan sementara



// User-Defined Function
function salam($waktu = "Datang", $nama = "Admin"){
    return "Selamat $waktu, $nama!";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan  Function</title>
</head>
<body>
    <h1><?= salam("Pagi","Ilham"); ?></h1>
</body>
</html>