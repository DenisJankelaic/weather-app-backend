"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.allMovies = JSON.parse(fs.readFileSync("app/db/all-movies.json", "utf8"));
//# sourceMappingURL=read-all-movies.js.map