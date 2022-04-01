// const div = document.querySelector('.container');
// const btnClose = document.querySelector('.close');
// btnClose.addEventListener('click', function() {
//     const card = document.querySelector('.card');
//     div.removeChild(card);
// });


// DOM Traversal
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// };

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('Ini Card')
//     });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});