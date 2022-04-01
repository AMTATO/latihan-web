 // For...of


 // Array
 //  const mhs = ['Ilham', 'Pradipta', 'Listiyanto'];

 //  for (let i = 0; i < mhs.length; i++) {
 //      console.log(mhs[i]);
 //  }

 //  mhs.forEach(mhs => console.log(mhs));

 //  for (const m of mhs) {
 //      console.log(m);
 //  }


 // String
 //  const nama = 'Ilham';
 //  for (const n of nama) {
 //      console.log(n);
 //  }



 //  const mhs = ['Ilham', 'Pradipta', 'Listiyanto'];
 //  mhs.forEach((m, i) => {
 //      console.log(`${m} adalah mahasiswa ke-${i+1}`);
 //  });

 //  for (const [i, m] of mhs.entries()) {
 //      console.log(`${m} adalah mahasiswa ke-${i+1}`);
 //  }



 // NodeList
 //  const liNama = document.querySelectorAll('.nama');
 //  liNama.forEach(n => console.log(n.textContent));
 //  for (const m of liNama) {
 //      console.log(m.textContent);
 //  }

 // Arguments
 //  function jumlahkanAngka() {
 //      let jumlah = 0;
 //      for (const a of arguments) {
 //          jumlah += a;
 //      }
 //      return jumlah;
 //  }
 //  console.log(jumlahkanAngka(1, 2, 3, 4, 5));



 // For...in
 const mhs = {
     nama: 'Ilham',
     umur: 22,
     email: 'ilham.25@students.amikom.ac.id'
 }

 for (const m in mhs) {
     console.log(m);
     console.log(mhs[m]);
 }