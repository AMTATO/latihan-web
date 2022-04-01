const btnUbahWarna = document.getElementById('btnUbahWarna');

btnUbahWarna.addEventListener('click', function() {
    document.body.classList.toggle('gold');
});



const btnAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Random Color');
btnAcakWarna.appendChild(textTombol);
btnAcakWarna.setAttribute('type', 'button');
btnUbahWarna.after(btnAcakWarna);
btnAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sliderMerah = document.querySelector('input[name=sliderMerah');
const boxMerah = document.getElementsByClassName('merah')[0];

sliderMerah.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    boxMerah.style.backgroundColor = 'rgb(' + r + ',0,0)';
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sliderHijau = document.querySelector('input[name=sliderHijau');
const boxHijau = document.getElementsByClassName('hijau')[0];

sliderHijau.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    boxHijau.style.backgroundColor = 'rgb(0,' + g + ',0)';
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sliderBiru = document.querySelector('input[name=sliderBiru');
const boxBiru = document.getElementsByClassName('biru')[0];

sliderBiru.addEventListener('change', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    boxBiru.style.backgroundColor = 'rgb(0, 0,' + b + ')';
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});