"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortPopular(items) {
    return items
        .sort(function (a, b) {
        if (a.popularity < b.popularity) {
            return 1;
        }
        if (a.popularity > b.popularity) {
            return -1;
        }
        return 0;
    });
}
exports.sortPopular = sortPopular;
//# sourceMappingURL=sort-popular.js.map