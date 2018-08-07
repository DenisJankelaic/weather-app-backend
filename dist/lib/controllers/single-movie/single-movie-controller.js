"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var read_all_movies_1 = require("../../../helpers/read-all-movies");
var router = express_1.Router();
router.get("/:id", function (req, res) {
    var id = req.params.id;
    res.send(read_all_movies_1.allMovies.filter(function (movie) { return movie.id === Number(id); }));
});
exports.SingleMovieController = router;
//# sourceMappingURL=single-movie-controller.js.map