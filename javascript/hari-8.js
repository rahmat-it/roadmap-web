const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tambah(a, b) {
    return a + b;
}

rl.question("Masukkan angka pertama: ", function (angka1) {
    rl.question("Masukkan angka kedua: ", function (angka2) {
        let hasil = tambah(Number(angka1), Number(angka2));
        console.log("Hasil penjumlahan:", hasil);
        rl.close();
    });
});