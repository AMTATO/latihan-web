<?php  
    require 'functions.php';
    $cars = query("SELECT * FROM cars");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>
<body>
    <h1>Daftar Mobil BMW</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No</th>
            <th>Model</th>
            <th>Harga</th>
            <th>CC</th>
            <th>Tenaga</th>
            <th>Transmisi</th>
            <th>Gambar</th>
            <th>Aksi</th>
        </tr>

        <?php $no = 1; ?>
        <?php foreach ($cars as $car) :?>
            <tr>
                <td><?= $no ?></td>
                <td><?= $car["model"] ?></td>
                <td><?= $car["harga"] ?></td>
                <td><?= $car["cc"] ?></td>
                <td><?= $car["tenaga"] ?></td>
                <td><?= $car["transmisi"] ?></td>
                <td><img src="img/<?= $car["gambar"] ?>" width="100px"></td>
                <td>
                    <a href="">Ubah</a> | 
                    <a href="">Hapus</a>
                </td>
            </tr>
            <?php $no++; ?>
        <?php endforeach; ?>
    </table>
</body>
</html>