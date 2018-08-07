"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.allVideos = JSON.parse(fs.readFileSync("app/db/videos.json", "utf8"));
//# sourceMappingURL=read-all-videos.js.map