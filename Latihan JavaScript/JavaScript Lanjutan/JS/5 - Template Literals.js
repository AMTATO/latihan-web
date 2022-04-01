 // Biasa
 //  const nama = 'Ilham',
 //      umur = 22;
 //  console.log(`Halo, nama saya ${nama}, dan saya berusia ${umur} tahun.`);

 // Embedded Expression
 //  const x = 10;
 //  console.log(`${(x%2==0)?'genap':'ganjil'}`);

 //HTML Fragment
 //  const mhs = {
 //      nama: 'Ilham Pradipta',
 //      umur: 22,
 //      nim: '17.11.1281',
 //      email: 'ilham.25@students.amikom.ac.id'
 //  };

 //  const el = `<div class="mhs">
 //  <h2>${mhs.nama}</h2>
 //  </div>`;

 //  console.log(el);



 // Latihan
 // 1. HTML Fragment -> sama di atas
 // 2. Looping
 //  const mhs = [{
 //      nama: 'Ilham',
 //      email: 'ilham.25@students.amikom.ac.id'
 //  }, {
 //      nama: 'Pradipta',
 //      email: 'ilham.25@students.amikom.ac.id'
 //  }, {
 //      nama: 'Listiyanto',
 //      email: 'ilham.25@students.amikom.ac.id'
 //  }];

 //  const el = `<div class="mhs">
 //     ${mhs.map(m=>`<ul>
 //         <li>${m.nama}</li>
 //         <li>${m.email}</li>
 //     </ul>`).join('')}
 //  </div>`;

 // 3. Conditionals -> Ternary
 //  const lagu = {
 //      judul: "See You Again",
 //      penyanyi: "Charlie Puth",
 //      feat: "Wiz Khalifa"
 //  }
 //  const el = `<div class="lagu">
 //     <ul>
 //         <li>${lagu.penyanyi}</li>
 //         <li>${lagu.judul} ${lagu.feat ?`(feat. ${lagu.feat})`:""}</li>
 //     </ul>
 // </div>`

 // 4. Nested -> HTML Fragments Bersarang
 //  const mhs = {
 //      nama: 'Sandhika Galih',
 //      semester: 5,
 //      mataKuliah: [
 //          'Rekayasa Web',
 //          'Analisis dan Perancangan Sistem Informasi',
 //          'Pemrograman Sistem Interaktif',
 //          'Perancangan Sistem Berorientasi Object'
 //      ]
 //  };

 //  function cetakMataKuliah(mataKuliah) {
 //      return `
 //      <ol>
 //         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
 //      </ol>
 //      `;
 //  }

 //  const el = `<div class="mhs">
 //     <h2></h2>
 //     <span class="semester">Semester : ${mhs.semester}</span>
 //     <h4>Mata Kuliah :</h4>
 //     ${cetakMataKuliah(mhs.mataKuliah)}
 // </div>`;

 //  document.body.innerHTML = el;



 // Tagged Templates
 const nama = 'Ilham Pradipta',
     umur = 22,
     email = 'ilham.25@students.amikom.ac.id';


 function highlight(strings, ...values) {
     //  Menampilkan hasil normal
     //  let result = '';
     //  strings.forEach((str, i) => {
     //      result += `${str}${values[i]||''}`
     //  });
     //  return result;

     //  return strings.reduce((result, str, i) => `${result}${str}${values[i]||''}`, '');


     // Highlight
     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i]||''}</span>`, '');
 }

 const str = highlight `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan email saya adalah ${email}.`;

 document.body.innerHTML = str;