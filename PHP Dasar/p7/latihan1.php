<?php
$cars= [
    [
        "model" => "BMW 3 Series Sedan",
        "harga" => "Rp 919.000.000",
        "cc" => "1998 cc",
        "tenaga" => "184 hp",
        "transmisi" => "8-Speed Steptronic",
        "gambar" => "bmw3.png"
    ],
    [
        "model" => "BMW 4 Series Coupé",
        "harga" => "Rp 1.528.000.000",
        "cc" => "1998 cc",
        "tenaga" => "258 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmw4coupe.png"
    ],
    [
        "model" => "BMW 5 Series Sedan",
        "harga" => "Rp 1.180.000.000",
        "cc" => "1998 cc",
        "tenaga" => "252 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmw5.png"
    ],
    [
        "model" => "BMW 7 Series Sedan",
        "harga" => "Rp 2.140.000.000",
        "cc" => "1998 cc",
        "tenaga" => "265 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmw7.png"
    ],
    [
        "model" => "BMW 8 Series Coupé",
        "harga" => "Rp 2.833.000.000",
        "cc" => "2998 cc",
        "tenaga" => "340 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmw8coupe.png"
    ],
    [
        "model" => "BMW 8 Series Gran Coupé",
        "harga" => "Rp 2.765.000.000",
        "cc" => "2998 cc",
        "tenaga" => "340 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmw8grancoupe.png"
    ],
    [
        "model" => "BMW M135i xDRIVE",
        "harga" => "Rp 1.334.000.000",
        "cc" => "1998 cc",
        "tenaga" => "306 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmwm135i.png"
    ],
    [
        "model" => "BMW M3 Competition",
        "harga" => "Rp 2.345.000.000",
        "cc" => "2993 cc",
        "tenaga" => "510 hp",
        "transmisi" => "8-Speed M Steptronic transmission with Drivelogic",
        "gambar" => "bmwm3competition.png"
    ],
    [
        "model" => "BMW M5 Competition",
        "harga" => "Rp 5.430.000.000",
        "cc" => "4395 cc",
        "tenaga" => "625 hp",
        "transmisi" => "8-Speed M Steptronic transmission with Drivelogic",
        "gambar" => "bmwm5competition.png"
    ],
    [
        "model" => "BMW Z4 Roadster",
        "harga" => "Rp 1.618.000.000",
        "cc" => "1998 cc",
        "tenaga" => "258 hp",
        "transmisi" => "8-Speed Steptronic Sport",
        "gambar" => "bmwz4roadster.png"
    ],
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMW Cars</title>
    
</head>
<body>
    <h1>Daftar Mobil BMW</h1>

    <?php foreach($cars as $car) : ?>
    <ul>
        <li>
            <a href="latihan2.php?model=<?= $car["model"]; ?>&harga=<?= $car["harga"]; ?>&cc=<?= $car["cc"]; ?>&tenaga=<?= $car["tenaga"]; ?>&transmisi=<?= $car["transmisi"]; ?>&gambar=<?= $car["gambar"]; ?>"><?= $car["model"]; ?></a>
        </li>
    </ul>
    <?php endforeach; ?>
</body>
</html>