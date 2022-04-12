<?php
// Pertemuan 6 -> Array Associative

// Array Numerik
// $mahasiswa = [
//     ["Ilham", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"],
//     ["Pradipta", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"],
//     ["Listiyanto", "17.11.1281", "Informatika", "ilham.25@students.amikom.ac.id"]
// ];

// Array Associative
$mahasiswa =[
    [
        "nama" => "Ilham",
        "nim" => "17.11.1281",
        "jurusan" => "Informatika",
        "email" => "ilham.25@students.amikom.ac.id",
    ],
    [
        "nama" => "Pradipta",
        "nim" => "17.11.1281",
        "jurusan" => "Informatika",
        "email" => "ilham.25@students.amikom.ac.id",
    ],
    [
        "nama" => "Listiyanto",
        "nim" => "17.11.1281",
        "jurusan" => "Informatika",
        "email" => "ilham.25@students.amikom.ac.id",
    ]
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array Associative</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>

    <?php foreach($mahasiswa as $mhs) : ?>
    <ul>
        <li>Nama : <?= $mhs["nama"]; ?></li>
        <li>NIM : <?= $mhs["nim"]; ?></li>
        <li>Jurusan : <?= $mhs["jurusan"]; ?></li>
        <li>Email : <?= $mhs["email"]; ?></li>
    </ul>
    <?php endforeach; ?>
</body>
</html>