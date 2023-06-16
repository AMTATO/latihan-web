// File System
const fs = require("node:fs");

// Menuliskan string ke file (Synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronous!');
// } catch(e){
//     console.log(e);
// }

// Menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (e) => {
//     console.log(e);
// });

// Membaca isi file (Synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//     if(e) throw error;
//     console.log(data);
// });

//Readline
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Siapa nama Anda : ", (nama) => {
//   rl.question("Apa makanan favorit Anda : ", (makanan) => {
//     console.log(`Hallo ${nama}, yang makanan favoritnya ${makanan}`);
//     rl.close();
//   });
// });

rl.question("Siapa nama Anda : ", (nama) => {
  rl.question("Berapa usia Anda : ", (usia) => {
    rl.question("Apa makanan favorit Anda : ", (makanan) => {
      const manusia = { nama, usia, makanan };
      const file = fs.readFileSync("data/data.json", "utf8");
      const data = JSON.parse(file);
      data.push(manusia);
      fs.writeFileSync("data/data.json", JSON.stringify(data));
      console.log("Data sudah tersimpan di JSON");
      rl.close();
    });
  });
});
