<?php  
    // Cara Lama
    // Koneksi ke database
    $conn = mysqli_connect("localhost", "root", "", "phpdasar");

    // Ambil data dari tabel cars / query data cars
    $result = mysqli_query($conn, "SELECT * FROM cars");
    if(!$result) {
        echo mysqli_error($conn);
    };

    // Ambil data cars dari object result
    // mysqli_fetch_row() -> Mengembalikan array numerik
    // $car = mysqli_fetch_row($result);
    // var_dump($car[2]);

    // mysqli_fetch_assoc() -> Mengembalikan array associative
    // $car = mysqli_fetch_assoc($result);
    // var_dump($car["model"]);

    // mysqli_fecth_array() -> Mengembalikan array numerik dan associative
    // $car = mysqli_fetch_array($result); 
    // var_dump($car["cc"]);

    // mysqli_fecth_object() -> Mengembalikan object
    // $car = mysqli_fetch_object($result);
    // var_dump($car->model);

    // while( $car = mysqli_fetch_assoc($result) ){
    //     var_dump($car);
    // }
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
        <?php while ($row = mysqli_fetch_assoc($result)) :?>
            <tr>
                <td><?= $no ?></td>
                <td><?= $row["model"] ?></td>
                <td><?= $row["harga"] ?></td>
                <td><?= $row["cc"] ?></td>
                <td><?= $row["tenaga"] ?></td>
                <td><?= $row["transmisi"] ?></td>
                <td><img src="img/<?= $row["gambar"] ?>" width="100px"></td>
                <td>
                    <a href="">Ubah</a> | 
                    <a href="">Hapus</a>
                </td>
            </tr>
            <?php $no++; ?>
        <?php endwhile; ?>
    </table>
</body>
</html>