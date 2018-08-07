"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var read_all_actors_1 = require("../../../helpers/read-all-actors");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send(read_all_actors_1.allActors);
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    res.send(read_all_actors_1.allActors.filter(function (actor) { return actor.id === Number(id); }));
});
exports.ActorsController = router;
//# sourceMappingURL=actors-controller.js.map