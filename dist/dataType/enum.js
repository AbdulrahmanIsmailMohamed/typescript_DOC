"use strict";
/**
* * Enum => Enumerations
* it allow us to declare a set of named constants
* it organize your code
* by default enums are number-based, first element is 0
* theres a numeric enums
* theres a string-based enums
*/
// create a simple game (speed write on keyboard)
const easy = 10;
const hard = 2;
const mid = 5;
var Level;
(function (Level) {
    Level[Level["easy"] = 10] = "easy";
    Level[Level["hard"] = 2] = "hard";
    Level[Level["mid"] = 5] = "mid";
})(Level || (Level = {}));
let lvl = "Easy";
console.log(`the level is ${lvl} and it ${Level.easy}`);
//# sourceMappingURL=enum.js.map