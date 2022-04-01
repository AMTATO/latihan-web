// Spread Operator -> memecah iterable menjadi single element

// const mhs = ['Ilham', 'Pradipta', 'Listiyanto'];
// console.log(...mhs[0]);


// Menggabungkan 2 array
// const mhs = ['Ilham', 'Pradipta', 'Listiyanto'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen]; // -> Lebih fleksibel
// const orang = mhs.concat(dosen);
// console.log(orang);


// Meng-copy array
// const mhs = ['Ilham', 'Pradipta', 'Listiyanto'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);


// const liMhs = document.querySelectorAll('li');
// Cara Manual
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// Map
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);



// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(huruf);
// nama.innerHTML = huruf;




// Rest Parameter
// function myFunc() {
// return myArgs; -> Rest Parameter
// return Array.from(arguments); -> Manual
// return [...arguments]; -> Spread operator
// }
// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));



// Array destructuting
const kelompok1 = ['A', 'B', 'C', 'D', 'E'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// Object Destucturing
const team = {
    pm: 'Ilham',
    frontEnd1: 'Pradipta',
    frontEnd2: 'Listiyanto',
    backend: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}
const {
    pm,
    ...myTeam
} = team;
console.log(myTeam);


// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
};
console.log(filterBy('boolean', 1, 2, 'ilham', false, 10, true, 'henra'));