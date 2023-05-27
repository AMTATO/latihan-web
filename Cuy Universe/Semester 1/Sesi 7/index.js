const http = require("http");
const rupiah = require("rupiah-format");
const fs = require("fs");

const hostname = "localhost";
const port = 3001;

// Request => Data masuk dari client
// Response => Data keluar dari sistem
const server = http.createServer(function (req, res) {
  const nama = "AMTATO";
  let saldo = 100000;
  let jajan = 76000;
  let sisa = saldo - jajan;

  saldo = rupiah.convert(saldo);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fs.appendFile("sisa-uang.txt", sisa, () => {
    console.log("Data uang berhasil disimpan.");
  });
  
  const hasil = `
    <head>
        <title>Saldo ${nama}</title>
        <style>
        h1{
            background-color: black;
            color: white;
            padding: 20px;
            text-align: center;
        }
        </style>
    </head>
    <body>
        <h1>Node JS Uang Jajan</h1>
        <p>
            Halo nama saya ${nama}, saya jajan sebanyak ${jajan}.<br> Uang saya sebelumnya ${saldo}.<br> Jadi sisa uang saya sekarang adalah ${sisa}.
        </p>
    </body>`;

  res.statusCode = 200;
  res.end(hasil);
});

server.listen(3001, "127.0.0.1", "", function () {
  console.log(`Server is Up in ${hostname}:${port}`);
});
