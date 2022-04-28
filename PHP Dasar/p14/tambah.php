<?php
    require 'functions.php';

    // Cek apakah tombol submit sudah ditekan atau belum
    if(isset($_POST["submit"])){
        // Cek apakah data berhasil ditambahkan atau tidak
        if(tambahData($_POST) > 0){
            echo "
                <script>
                    alert('Data berhasil ditambahkan!');
                    document.location.href = 'index.php';
                </script>
            ";
        } else {
            echo "
                <script>
                    alert('Data gagal ditambahkan!');
                    document.location.href = 'index.php';
                </script>
            ";
        }
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

    <title>Add Car</title>
  </head>
  <body class="bg-dark ps-3 pe-3">
    <!-- <h1 class="display-3 text-center mt-3 mb-5 text-white">Tambah Mobil</h1> -->

    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form action="" method="post" class="form-container bg-white p-4 rounded-3" enctype="multipart/form-data">
                    <div class="form-group">
                        <h2 class="text-center font-weight-bold">Tambah Data Mobil</h2>
                        <label class="form-label fs-5" for="model">Model</label>
                        <input type="text" class="form-control mb-3" id="model" name="model" placeholder="BMW 3 Series Sedan">
                        <label class="form-label fs-5" for="harga">Harga</label>
                        <input type="text" class="form-control mb-3" id="harga" name="harga" placeholder="Rp 919.000.000">
                        <label class="form-label fs-5" for="cc">CC</label>
                        <input type="text" class="form-control mb-3" id="cc" name="cc" placeholder="1998 cc">
                        <label class="form-label fs-5" for="tenaga">Tenaga</label>
                        <input type="text" class="form-control mb-3" id="tenaga" name="tenaga" placeholder="184 hp">
                        <label class="form-label fs-5" for="transmisi">Transmisi</label>
                        <input type="text" class="form-control mb-3" id="transmisi" name="transmisi" placeholder="8-Speed Steptronic">
                        <div class="mb-3">
                            <label for="gambar" class="form-label fs-5">Gambar</label>
                            <input class="form-control mb-4" type="file" id="gambar" name="gambar">
                        </div>
                        <div class="d-grid gap-2">
                           <button type="submit" name="submit" class="btn btn-lg btn-primary">Tambah Data</button> 
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>

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
