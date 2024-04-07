// // object literal
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


// // function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }

//     return mahasiswa;
// };

// let richo = Mahasiswa('Richo', 10);
// let ocir = Mahasiswa('Ocir', 20);


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