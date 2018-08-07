"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortBestRated(items) {
    return items
        .sort(function (a, b) {
        if (a.vote_average < b.vote_average) {
            return 1;
        }
        if (a.vote_average > b.vote_average) {
            return -1;
        }
        return 0;
    });
}
exports.sortBestRated = sortBestRated;
//# sourceMappingURL=sort-best-rated.js.map