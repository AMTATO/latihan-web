<?php
// Pertemuan 5 -> Array
// Variabel yang dapat memiliki banyak nilai
// Elemen pada array boleh memiliki tipe data yang berbeda
// Pasangan antara key dan value

// Membuat
// Cara Lama
// $hari = array("Senin", "Selasa", "Rabu");
 
// Cara Baru
// $hari = ["Senin", "Selasa", "Rabu"];
// $bulan = ["Januari", "Februari", "Maret"];

// Menampilkan Array
// var_dump($hari);
// echo "<br>";
// print_r($bulam);

// Menampilkan 1 elemen pada array
// echo $bulan[2];


// Menambahkan elemen baru pada array
// print_r($hari);
// $hari[] = ["Kamis", "Jumat"];
// echo "<br>";
// print_r($hari);


// Pengulangan pada array -> for, foreach
// $angka = [1,2,3,4,5,6,7,8,9,10];
$mahasiswa = [
    ["Ilham", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"],
    ["Pradipta", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"],
    ["Listiyanto", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"]
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Array</title>
    <!-- <style>
        .kotak {
            width: 50px;
            height: 50px;
            background-color: salmon;
            text-align: center;
            line-height: 50px;
            margin: 3px;
            float: left;
        }
        .clear {
            clear: both;
        }
    </style> Latihan 2 -->
</head>
<body>

    <!-- Latihan 3 -->
    <h1>Daftar Mahasiswa</h1>

    <?php foreach($mahasiswa as $mhs) : ?>
    <ul>
        <li>Nama : <?= $mhs[0]; ?></li>
        <li>NIM : <?= $mhs[1]; ?></li>
        <li>Jurusan : <?= $mhs[2]; ?></li>
        <li>Email : <?= $mhs[3]; ?></li>
    </ul>
    <?php endforeach; ?>
 </body>
</html>

<!-- Latihan 2 : Masukkan ke tag HTML sebelum di gunakan-->
    <!-- <?php for($i = 0; $i < count($angka); $i++) { ?>
        <div class="kotak"><?php echo $angka[$i] ?></div>
        <?php } ?>

<div class="clear"></div>

<?php foreach($angka as $a) {?>
    <div class="kotak"><?php echo $a?></div>
<?php } ?>

<div class="clear"></div>

<?php foreach($angka as $a) :?>
    <div class="kotak"><?= $a ?></div>
<?php endforeach; ?> -->