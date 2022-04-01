// DOM - Manipulation

// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Ilham Pradipta</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Hello World';


// element.style.<propertiCSS>
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';


// element.getAttribute()
// element.setAttribute()
// element.removeAttribute()
const judul = document.getElementsByTagName('h1')[0];
const a = document.querySelector('section#a a');
a.setAttribute('name', 'ilham');
a.getAttribute('href');
a.removeAttribute('href');


// element.classList.add()
// element.classList.remove()
// element.classList.toggle()
// element.classList.item()
// element.classList.contains()
// element.classList.replace()
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
p2.classList.toggle('label');
p2.classList.item(2);
p2.classList.contains('label');
p2.classList.replace('label', 'satu');


// Manipulasi Node
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// ...
// Buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// SImpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);