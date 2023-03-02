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
function difficult(): number {
    return 2
}

enum Kids {
    small = 20
}

enum Level {
    kids = Kids.small,
    easy = 10,
    hard = difficult()
}

console.log(Level.kids);
console.log(Level.hard);

