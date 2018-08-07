"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sort_popular_1 = require("../../../helpers/sort-popular");
var read_all_movies_1 = require("../../../helpers/read-all-movies");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send(sort_popular_1.sortPopular(read_all_movies_1.allMovies));
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    res.send(read_all_movies_1.allMovies.filter(function (movie) { return movie.id === Number(id); }));
});
exports.PopularController = router;
//# sourceMappingURL=popular-controller.js.map