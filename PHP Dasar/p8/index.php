<?php  
    require 'functions.php';
    $cars = query("SELECT * FROM cars");
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>BMW Cars</title>
    <style>
        a{
            text-decoration: none;
            color: white;
        }
        a:hover{
            color: gray;
        }
    </style>
  </head>
  <body class="bg-dark">
    <h1 class="display-3 text-center text-white mt-3">Daftar Mobil BMW</h1>

    <table class="mt-4 table table-striped table-hover table-light align-middle">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Model</th>
                <th scope="col">Harga</th>
                <th scope="col">CC</th>
                <th scope="col">Tenaga</th>
                <th scope="col">Transmisi</th>
                <th scope="col">Gambar</th>
                <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <?php $no = 1; ?>
            <?php foreach ($cars as $car) :?>
                <tr>
                    <th scope="row"><?= $no ?></td>
                    <td><?= $car["model"] ?></td>
                    <td><?= $car["harga"] ?></td>
                    <td><?= $car["cc"] ?></td>
                    <td><?= $car["tenaga"] ?></td>
                    <td><?= $car["transmisi"] ?></td>
                    <td><img src="img/<?= $car["gambar"] ?>" width="100px"></td>
                    <td>
                        <button type="button" class="btn btn-primary"><a href="">Ubah</a></button>
                        
                        <button type="button" class="btn btn-danger"><a href="">Hapus</a></button>
                        
                    </td>
                </tr>
                <?php $no++; ?>
            <?php endforeach; ?>
        </tbody> 
    </table>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
