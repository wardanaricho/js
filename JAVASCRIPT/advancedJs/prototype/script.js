// // object literal
// // tidak efektif jika object banyak
// let mahasiswa1 = {
//     nama: "Richo",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         // return
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },
// }

// let mahasiswa2 = {
//     nama: "Ocir",
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         // return
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },
// }

// =====================================================================

// function declaration

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// };

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Helo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Helo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Helo ${this.nama}, selamat tidur!`;
// }

// let richo = new Mahasiswa('Richo', 10);
// let ocir = Mahasiswa('Ocir', 20);


// versi class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Helo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Helo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Helo ${this.nama}, selamat tidur!`;
    }
}

let richo = new Mahasiswa('richo', 10);
let ocir = new Mahasiswa('ocir', 20);



// =====================================================================

// // constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// };

// let richo = new Mahasiswa('Richo', 10);