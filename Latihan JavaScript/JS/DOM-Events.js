// Events

const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');

function ubahWarna2() {
    p2.style.backgroundColor = 'green';
}
p2.onclick = ubahWarna2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});