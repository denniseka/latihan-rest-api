// let mahasiswa = {
//   nama: "Dennis Eka Saputra",
//   nim: "17103047",
//   email: "dennsaid@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa));

// // Menggunakan AJAX untuk parse dari JSON ke objek
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };

// xhr.open("GET", "coba.json", true);
// xhr.send();

// parse JSON to object menggunakan Jquery
$.getJSON("coba.json", function (mahasiswa) {
  console.log(mahasiswa);
});
