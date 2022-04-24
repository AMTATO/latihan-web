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
        $gambar = htmlspecialchars($data["gambar"]);

        // Query insert data
        $query = "INSERT INTO cars VALUES (NULL, '$model', '$harga', '$cc', '$tenaga', '$transmisi', '$gambar')";
        mysqli_query($conn, $query);

        return mysqli_affected_rows($conn);
    };

    function hapusData($id){
        global $conn;
        mysqli_query($conn, "DELETE FROM cars WHERE id=$id");
        return mysqli_affected_rows($conn);
    }

    function ubahData($data){
        global $conn;

        // Ambil data dari tiap elemen dari form
        $id = $data["id"];
        $model = htmlspecialchars($data["model"]);
        $harga = htmlspecialchars($data["harga"]);
        $cc = htmlspecialchars($data["cc"]);
        $tenaga = htmlspecialchars($data["tenaga"]);
        $transmisi = htmlspecialchars($data["transmisi"]);
        $gambar = htmlspecialchars($data["gambar"]);

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
?>