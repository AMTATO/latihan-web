<?php
// Pertemuan 3 -> Control Flow(Struktur Kendali)
// 1. Pengulangan
// for
// for($i = 0; $i < 5; $i++){
//     echo "Hello Pradipta<br>";
// }

// while
// $i = 0;
// while($i < 5){
//     echo "Hello Pradipta<br>";
//     $i++;
// }

// do.. while
// $i = 0;
// do{
//     echo "Hello Pradipta<br>";
//     $i++;
// } while($i < 5);

// foreach -> Pengulangan khusus array

// 2. Penkondisian
// if.. else
// $x = 10;
// if($x < 20){
//     echo "benar";
// } else{
//     echo "salah";
// }

// if.. else if.. else
// $x = 30;
// if($x < 20){
//     echo "benar";
// }else if($x == 20){
//     echo "bingo!";
// }else{
//     echo "salah";
// }

// ternary
// switch


?>

<!-- Pengulangan -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan 1</title>
    <style>
        .warna-baris {
            background-color: tomato;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="10" cellspacing="0" >
        <!-- Cara 1 -->
        <!-- <?php 
            for($i = 1; $i <= 3; $i++){
                echo "<tr>";
                for($j = 1; $j <= 5; $j++){
                    echo "<td>$i,$j</td>";
                }
                echo "</tr>";
            }
        ?> -->

        <!-- Cara ? -->
        <?php for($i = 1; $i <= 5; $i++): ?>
            <?php if($i %2 == 1) : ?>
                <tr class="warna-baris">
            <?php else : ?>
                <tr>
            <?php endif; ?>
                <?php for($j = 1; $j <= 5; $j++): ?>
                    <td><?= "$i,$j"; ?></td>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
</body>
</html>