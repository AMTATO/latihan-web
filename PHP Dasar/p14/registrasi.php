<?php
    require 'functions.php';

    if(isset($_POST["registrasi"])){
        if(registrasi($_POST) > 0){
            echo "<script>
                    alert('User baru berhasil dibuat!');
                </script>";
        } else {
            "<script>
                    alert('<?php echo mysqli_error($conn); ?>');
                </script>";
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

    <title>Registration</title>
    <style>
        #container{
            margin-top: 10em;
        }
    </style>
  </head>
  <body class="bg-dark">
  <div class="container-fluid" id="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form action="" method="post" class="form-container bg-white p-4 rounded-3">
                    <div class="form-group">
                        <h2 class="text-center font-weight-bold mb-5">Registrasi</h2>
                        <label class="form-label fs-5" for="nama">Nama Lengkap</label>
                        <input type="text" class="form-control mb-3" id="nama" name="nama" placeholder="Masukkan nama Anda...">
                        <label class="form-label fs-5" for="username">Username</label>
                        <input type="text" class="form-control mb-3" id="username" name="username" placeholder="Masukkan username...">
                        <label class="form-label fs-5" for="password">Password</label>
                        <input type="password" class="form-control mb-3" id="password" name="password" placeholder="Masukkan password...">
                        <label class="form-label fs-5" for="password2">Konfirmasi Password</label>
                        <input type="password" class="form-control mb-5" id="password2" name="password2" placeholder="Masukkan konfirmasi password...">
                        <div class="d-grid gap-2">
                           <button type="submit" name="registrasi" class="btn btn-lg btn-primary">Registrasi</button> 
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
