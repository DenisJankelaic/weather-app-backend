"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var read_all_movies_1 = require("../../../helpers/read-all-movies");
var router = express_1.Router();
router.get("/:query", function (req, res) {
    var query = req.params.query;
    res.send(read_all_movies_1.allMovies.filter(function (movie) { return movie.title.toLowerCase().includes(query.toLowerCase()); }));
});
exports.SearchController = router;
//# sourceMappingURL=search-controller.js.map