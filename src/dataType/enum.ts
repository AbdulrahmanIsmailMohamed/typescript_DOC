/**
* * Enum => Enumerations
* it allow us to declare a set of named constants
* it organize your code
* by default enums are number-based, first element is 0
* theres a numeric enums
* theres a string-based enums
*/

// create a simple game (speed write on keyboard)
const easy: number = 10;
const hard: number = 2;
const mid: number = 5;

enum Level {
    easy = 10,
    hard = 2,
    mid = 5,
}

let lvl: string = "Easy";
console.log(`the level is ${lvl} and it ${Level.easy}`);
