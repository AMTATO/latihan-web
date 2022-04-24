<?php 
    // Cek apakah tidak ada data di $_GET
    if(!isset($_GET["model"]) ||
    !isset($_GET["harga"]) ||
    !isset($_GET["cc"]) ||
    !isset($_GET["tenaga"]) ||
    !isset($_GET["transmisi"]) ||
    !isset($_GET["gambar"]) ){
        // Redirect
        header("Location: latihan1.php");
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Car</title>
    <style>
        img{
            width: 500px;
            height: 300px;
            background-size: cover;
        }
    </style>
</head>
<body>
    <ul>
        <li><img src="img/<?= $_GET["gambar"]; ?>" alt=""></li>
        <li>Model : <?= $_GET["model"]; ?></li>
        <li>Harga : <?= $_GET["harga"]; ?></li>
        <li>CC : <?= $_GET["cc"]; ?></li>
        <li>Tenaga : <?= $_GET["tenaga"]; ?></li>
        <li>Transmisi : <?= $_GET["transmisi"]; ?></li>
    </ul>

    <a href="latihan1.php">Kembali ke daftar mobil</a>
</body>
</html>