<?php
// Pertemuan 2 - PHP Dasar -> Sintaks Dasar
// Standard Output -> echo, print, print_r, var_dump
// echo "Ilham ";
// print "Pradipta ";
// print_r("Listiyanto ");
// var_dump("Listiyanto ");


// Penulisan sintaks PHP
// 1. PHP di dalam HTML
// 2. HTML di dalam PHP


// Variabel dan Tipe Data
// Variabel -> Tidak boleh diawali dengan angka, tapi boleh mengandung angka
// $nama = "Pradipta";
// echo "Nama saya $nama";
// echo 'Nama saya $nama'; -> Tidak bisa memanggil variabel

// Operator
// Aritmatika -> + - * / %
// $x = 10;
// $y = 20;
// echo $x * $y;

// Penggabung string / concatenation / concat -> .
// $nama_depan = "Ilham";
// $nama_belakang = "Pradipta";
// echo $nama_depan . " " . $nama_belakang;  

// Asignment -> =, +=, -=, *=, /=, %=, .=
// $x = 5;
// $x += 6;
// echo $x;

// $nama = "Ilham";
// $nama .= " ";
// $nama .= "Pradipta";
// echo $nama;

// Perbandingan -> <, >, <=, >=, ==, !=
// var_dump(1 == "1"); -> True

// Identitas -> ===, !==
// var_dump(1 === "1"); -> False

// Logika -> &&, ||, ! 
// $x = 30;
// var_dump($x < 20 || $x % 2 == 0); -> True

?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar PHP</title>
</head>
<body>
    <h1>Halo, Selamat Datang <?php echo$nama;?></h1>
    <p><?php echo "Ini adalah paragraf"; ?></p>
    <?php echo "<h1>Halo Semua</h1>"?>
</body>
</html> -->