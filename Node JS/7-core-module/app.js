// File System
const fs = require('node:fs');

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
fs.readFile('data/test.txt', 'utf-8', (e, data) => {
    if(e) throw error;
    console.log(data);
});