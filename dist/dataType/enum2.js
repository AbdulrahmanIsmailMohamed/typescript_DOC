"use strict";
/**
* * Enum 2
* "preserveConstEnums": true, Disable erasing 'const enum' declarations in generated code.
* Enum Can refer to other enum
* Enum Can refer to same enum
* Enum Can Have Calculations
* Enum Can Have Functions
*/
// const enum level {
//     i = 1
// }
function difficult() {
    return 2;
}
var Kids;
(function (Kids) {
    Kids[Kids["small"] = 20] = "small";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["kids"] = 20] = "kids";
    Level[Level["easy"] = 10] = "easy";
    Level[Level["hard"] = difficult()] = "hard";
})(Level || (Level = {}));
console.log(Level.kids);
console.log(Level.hard);
//# sourceMappingURL=enum2.js.map