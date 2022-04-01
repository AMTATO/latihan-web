function getPilihanComputer() {
    const computer = Math.random();

    if (computer < 0.34) return 'gajah';
    if (computer >= 0.34 && computer < 0.67) return 'semut';
    return 'orang';
}

function getHasil(computer, player) {
    if (player == computer) return 'SERI!';
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (computer == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'Images/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
};

const pilihan = document.querySelectorAll('li img');
let i = 0;
let j = 0;
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'Images/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            const scorePlayer = document.querySelector('.score-player');
            const scoreComputer = document.querySelector('.score-computer');

            if (hasil == 'MENANG!') i++;
            if (hasil == 'KALAH!') j++;

            info.innerHTML = hasil;
            scorePlayer.innerHTML = i;
            scoreComputer.innerHTML = j;
        }, 1000);

    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Images/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Images/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Images/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });