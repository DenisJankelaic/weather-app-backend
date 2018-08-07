"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var popular_controller_1 = require("../controllers/popular-movies/popular-controller");
var best_rated_controller_1 = require("../controllers/best-rated-movies/best-rated-controller");
var single_movie_controller_1 = require("../controllers/single-movie/single-movie-controller");
var actors_controller_1 = require("../controllers/actors/actors-controller");
var videos_controller_1 = require("../controllers/movie-videos/videos-controller");
var search_controller_1 = require("../controllers/search/search-controller");
var port = 3000;
app_1.default.use("/popular-movies", popular_controller_1.PopularController);
app_1.default.use("/best-rated-movies", best_rated_controller_1.BestRatedController);
app_1.default.use("/movie", single_movie_controller_1.SingleMovieController);
app_1.default.use("/actors", actors_controller_1.ActorsController);
app_1.default.use("/videos", videos_controller_1.VideoController);
app_1.default.use("/search", search_controller_1.SearchController);
app_1.default.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=server.js.map