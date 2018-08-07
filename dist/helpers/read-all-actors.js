"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.allActors = JSON.parse(fs.readFileSync("app/db/actors.json", "utf8"));
//# sourceMappingURL=read-all-actors.js.map