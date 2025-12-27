// Hari 2 - Penjumlahan dengan input user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', function(a) {
  rl.question('Masukkan angka kedua: ', function(b) {
    let hasil = Number(a) + Number(b);
    console.log('Hasil penjumlahan:', hasil);
    rl.close();
  });
});