// menggunakan Jquery

function searchMovie() {
  $("#movie-list").html("");

  //request ke API
  $.ajax({
    type: "get",
    url: "https://www.omdbapi.com",
    dataType: "json",
    data: {
      apikey: "df64a659",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(`
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${data.Year}</h6>
                        
                            <a href="#" class="btn btn-primary see-detail" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                        </div>
                    </div>
                </div>
            `);
        });

        $("#search-input").val("");
      } else {
        $("#movie-list").html(`<h1 class="text-center"> ${result.Error} </h1>`);
      }
    },
  });
}

$("#search-btn").on("click", function () {
  searchMovie();
});

$("#search-input").on("keyup", function (e) {
  if (e.keyCode === 13) {
    searchMovie();
  }
});

// Menampilkan detail dari Movie
// menggunakan event bundling, pertama panggil parent dari elementnya, karena btn see detail di awal compail tidak ada, jadi event di taruh di parentnya

$("#movie-list").on("click", ".see-detail", function () {
  $.ajax({
    type: "get",
    url: "https://www.omdbapi.com",
    data: {
      apikey: "df64a659",
      i: $(this).data("id"),
    },
    dataType: "json",
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                <li class="list-group-item">Released : ${movie.Released}</li>
                                <li class="list-group-item">Runtime : ${movie.Runtime}</li>
                                <li class="list-group-item">Genre : ${movie.Genre}</li>
                                <li class="list-group-item">Actors : ${movie.Actors}</li>
                                <li class="list-group-item">Director : ${movie.Director}</li>
                                <li class="list-group-item"> ${movie.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `);
      }
    },
  });
});
