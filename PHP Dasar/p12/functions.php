<?php 
    // Koneksi ke database
    $conn = mysqli_connect("localhost", "root", "", "phpdasar");

    function tampilkanData($query){
        global $conn;

        $result = mysqli_query($conn, $query);
        $rows = [];
        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        return $rows;
    };

    function tambahData($data){
        global $conn;

        // Ambil data dari tiap elemen dari form
        $model = htmlspecialchars($data["model"]);
        $harga = htmlspecialchars($data["harga"]);
        $cc = htmlspecialchars($data["cc"]);
        $tenaga = htmlspecialchars($data["tenaga"]);
        $transmisi = htmlspecialchars($data["transmisi"]);

        // $gambar = htmlspecialchars($data["gambar"]);
        // Upload gambar
        $gambar = uploadGambar();
        if(!$gambar){
            return false;
        }

        // Query insert data
        $query = "INSERT INTO cars VALUES (NULL, '$model', '$harga', '$cc', '$tenaga', '$transmisi', '$gambar')";
        mysqli_query($conn, $query);

        return mysqli_affected_rows($conn);
    };

    function uploadGambar(){
        $namaFile = $_FILES['gambar']['name'];
        $ukuranFile = $_FILES['gambar']['size'];
        $error = $_FILES['gambar']['error'];
        $tmpName = $_FILES['gambar']['tmp_name'];

        // Cek apakah tidak ada gambar yang diupload
        if($error === 4){
            echo "<script>
                    alert('Silahkan pilih gambar terlebih dahulu!');
                </script>";
            return false;
        }

        // Cek apakah yang diupload adalah gambar
        $ekstensiGambarValid = ['jpg', 'jpeg', 'png'];
        $ekstensiGambar = explode('.', $namaFile);
        $ekstensiGambar = strtolower(end($ekstensiGambar));
        if(!in_array($ekstensiGambar, $ekstensiGambarValid)){
            echo "<script>
                    alert('Anda tidak mengunggah gambar!');
                </script>";
            return false;
        }

        // Cek jika ukurannya terlalu besar
        if($ukuranFile > 1000000){
            echo "<script>
                    alert('Ukuran gambar terlalu besar!');
                </script>";
            return false;
        }

        // Lolos pengecekan, gambar siap diupload
        // Generate nama gambar baru
        $namaFileBaru = uniqid();
        $namaFileBaru .= '.';
        $namaFileBaru .= $ekstensiGambar;
        
        move_uploaded_file($tmpName, 'img/' . $namaFileBaru);

        return $namaFileBaru;
    };

    function hapusData($id){
        global $conn;
        mysqli_query($conn, "DELETE FROM cars WHERE id=$id");
        return mysqli_affected_rows($conn);
    };

    function ubahData($data){
        global $conn;

        // Ambil data dari tiap elemen dari form
        $id = $data["id"];
        $model = htmlspecialchars($data["model"]);
        $harga = htmlspecialchars($data["harga"]);
        $cc = htmlspecialchars($data["cc"]);
        $tenaga = htmlspecialchars($data["tenaga"]);
        $transmisi = htmlspecialchars($data["transmisi"]);
        $gambarLama = htmlspecialchars($data["gambarLama"]);

        // Cek apakah user pilih gambar baru atau tidak
        if($_FILES['gambar']['error']===4){
            $gambar = $gambarLama;
        } else {
            $gambar = uploadGambar();
        }

        // Query insert data
        $query = "UPDATE cars SET 
                    model = '$model',
                    harga = '$harga',
                    cc = '$cc',
                    tenaga = '$tenaga',
                    transmisi = '$transmisi',
                    gambar = '$gambar'
                    WHERE id = $id
                    ";
        mysqli_query($conn, $query);

        return mysqli_affected_rows($conn);
    };

    function cariData($keyword){
        $query = "SELECT * FROM cars WHERE
                    model LIKE '%$keyword%' OR
                    harga LIKE '%$keyword%' OR
                    cc LIKE '%$keyword%' OR
                    tenaga LIKE '%$keyword%' OR
                    transmisi LIKE '%$keyword%'
                    ";
        return tampilkanData($query);
    };
?>