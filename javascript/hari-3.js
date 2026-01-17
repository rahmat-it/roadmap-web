const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai kamu: ", function (nilai) {
    nilai = Number(nilai);

    if (nilai >= 75) {
        console.log("Selamat, kamu LULUS!");
    } else {
        console.log("Maaf, kamu belum LULUS.");
    }

    rl.close();
})