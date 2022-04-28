<?php  
    require 'functions.php';
    $cars = tampilkanData("SELECT * FROM cars");

    // Ketika tombol cari ditekan
    if(isset($_POST["cari"])){
        $cars = cariData($_POST["keyword"]);
    }
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
            color: white;
            opacity: .8;
        }
    </style>
  </head>
  <body class="bg-dark ps-3 pe-3">
    <h1 class="display-3 text-center text-white mt-3">Daftar Mobil BMW</h1>
    
    <div class="container-fluid mt-5 mb-4">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <form action="" method="post">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i style='font-size:24px' class='fas'>&#xf002;</i>
                        </span>
                        <input type="text" class="form-control" placeholder="Masukkan keyword pencarian..." name="keyword" autofocus autocomplete="off">
                        <button class="btn btn-primary btn-outline-secondary text-white" type="submit" name="cari">Cari</button>
                    </div>
                </form>
            </div>
            <div class="col-2 d-flex justify-content-end">
                <button type="button" class="btn btn-primary text-center ">
                    <a href="tambah.php">
                        <i style='font-size:16px' class='fas'>&#xf067;</i>
                        Tambah Mobil
                    </a>
                </button>
            </div>
        </div>
    </div>

    <!-- <div class="">
        
    </div> -->
    

    <table class="mt-2 table table-striped table-hover table-light align-middle">
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
                        <button type="button" class="btn btn-primary"><a href="ubah.php?id=<?= $car["id"]; ?>">Ubah</a></button>
                        
                        <button type="button" class="btn btn-danger"><a href="hapus.php?id=<?= $car["id"]; ?>" onclick="return confirm('Apakah Anda yakin untuk menghapus data ?');">Hapus</a></button>
                    </td>
                </tr>
                <?php $no++; ?>
            <?php endforeach; ?>
        </tbody> 
    </table>
    <div on></div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
