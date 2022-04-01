// Menggunakan Ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=9319457c&s=avengers',
//     success: movies => console.log(movies)
// });

// Menggunakan vanilla JavaScript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=9319457c&s=avengers');
// xhr.send();

// Fetch
// fetch('http://www.omdbapi.com/?apikey=9319457c&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));






// Promise 
// -> Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous dimasa yang akan datang
// -> Janji (Terpenuhi / Ingkar)
// -> States (Fulfilled / Rejected / Pending)
// -> Callback (Resolve / Reject / Finally)
// -> Aksi (Then / Catch)


// Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });
// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');



// Promise.all
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Ilham Pradipta',
            pemeran: 'Ilham, Pradipta'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Klaten',
            temp: 26,
            kondisi: 'Cerah'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });