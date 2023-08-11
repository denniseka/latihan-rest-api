function taampilkanSemuaMenu() {
  // Untuk mengambil data file JSON menggunakan AJAX jquery
  // jika sudah sukses mengambil data, jalankan fungsinya
  $.getJSON("data/pizza.json", function (hasil) {
    // membuat variabel menu untuk menghilangkan key menu
    let menu = hasil.menu;

    // Melakukan looping terhadap object
    $.each(menu, function (i, data) {
      // untuk menambahkan card kedalam element dengan id daftar-menu
      $("#daftar-menu").append(
        '<div class="col-md-4"><div class="card"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top" alt="' +
          data.nama +
          '"/> <div class="card-body"> <h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p> <h5 class="card-title">Rp. ' +
          data.harga +
          ',-</h5> <a href="#" class="btn btn-primary">Pesan Sekarang </a> </div> </div> </div>'
      );
    });
  });
}

taampilkanSemuaMenu();

// artinya jquery carikan elemen dengan class .nav-link ketika di klik jalankan fungsi
$(".nav-link").on("click", function () {
  // untuk menghilangkan class active pada semua element dengan class nav-link
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    $("#daftar-menu").html("");
    taampilkanSemuaMenu();
    return;
  }

  // menampilkan daftar menu sesuai kategori
  $.getJSON("data/pizza.json", function (hasil) {
    let menu = hasil.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top" alt="' +
          data.nama +
          '"/> <div class="card-body"> <h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p> <h5 class="card-title">Rp. ' +
          data.harga +
          ',-</h5> <a href="#" class="btn btn-primary">Pesan Sekarang </a> </div> </div> </div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});
