"use strict";
// Write The Function Here
function printInConsole(...params) {
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] == "string") {
            console.log(`The Value Is ${params[i]} And Type Is string`);
        }
        if (typeof params[i] == "number") {
            console.log(`The Value Is ${params[i]} And Type Is number`);
        }
        if (typeof params[i] == "boolean") {
            console.log(`The Value Is ${params[i]} And Type Is boolean`);
        }
    }
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
/**
** Output
The Value Is 1 And Type Is number
The Value Is 2 And Type Is number
The Value Is 3 And Type Is number
The Value Is 4 And Type Is number
The Value Is 5 And Type Is number
Done
The Value Is A And Type Is string
The Value Is B And Type Is string
The Value Is C And Type Is string
Done
The Value Is true And Type Is boolean
The Value Is false And Type Is boolean
The Value Is false And Type Is boolean
The Value Is true And Type Is boolean
The Value Is true And Type Is boolean
Done
*/ 
//# sourceMappingURL=task6.js.map