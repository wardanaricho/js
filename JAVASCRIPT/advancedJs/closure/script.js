function init() {
    // let nama = "Richo Wardana";
    return function (nama) {
        console.log(nama);
    }
}

let panggilNama = init();
panggilNama('Ocir');
panggilNama('Richo');