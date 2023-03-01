"use strict";
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
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=task6.js.map