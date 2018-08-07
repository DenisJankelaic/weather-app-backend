"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sort_best_rated_1 = require("../../../helpers/sort-best-rated");
var read_all_movies_1 = require("../../../helpers/read-all-movies");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send(sort_best_rated_1.sortBestRated(read_all_movies_1.allMovies.filter(function (movie) { return movie.vote_count >= 3000; })));
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    res.send(read_all_movies_1.allMovies.filter(function (movie) { return movie.id === Number(id) && movie.vote_count >= 3000; }));
});
exports.BestRatedController = router;
//# sourceMappingURL=best-rated-controller.js.map