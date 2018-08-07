"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var read_all_videos_1 = require("../../helpers/read-all-videos");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send(read_all_videos_1.allVideos);
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    res.send(read_all_videos_1.allVideos.filter(function (video) { return video.id === Number(id); }));
});
exports.VideoController = router;
//# sourceMappingURL=videos-controller.js.map