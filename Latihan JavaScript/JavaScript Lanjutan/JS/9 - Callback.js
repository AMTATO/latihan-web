// Callback -> Synchronous

// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(Callback) {
//     const nama = prompt('Masukkan Nama: ');
//     Callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [{
//     'nama': 'Ilham',
//     'kelas': 'A',
// }, {
//     'nama': 'Pradipta',
//     'kelas': 'B',
// }, {
//     'nama': 'Listiyanto',
//     'kelas': 'C',
// }];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');




// Callback -> Asynchronous

// Ajax -> Vanilla JavaScript
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('../Data/mahasiswa.json', results => {
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {});
// console.log('selesai');




// JQuery
// console.log('mulai');
// $.ajax({
//     url: '../Data/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('selesai');




// <<= Latihan =>>

// JQuery
// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=9319457c&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             console.log(movies);
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCard(m);
//             });
//             $('.movie-container').html(cards);

//             // Ketika tombol detail di-klik
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=9319457c&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });


// Awal Fetch
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=9319457c&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCard(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // Ketika tombol detail di-klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=9319457c&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         });
//                 })
//             });
//         });
// });
// Akhir Fetch


// Awal Fetch Refactor (Async Await)
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (err) {
        // console.log(err);
        alert(err);
    };
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=9319457c&s=' + keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search;
        });
};

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCard(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
};

// Event Binding
document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=9319457c&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
};

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
};
// Akhir Fetch Refactor (Async Await)

function showCard(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="cold-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title} (${m.Year})</h4>
                            </li>
                            <li class="list-group-item"><Strong>Director : </Strong> ${m.Director}</li>
                            <li class="list-group-item"><Strong>Actors : </Strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}