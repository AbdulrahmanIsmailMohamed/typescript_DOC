"use strict";
/**
* * VOID & NEVER & allowUnreachableCode
* never: for typescript function that will never return something,
    can be always running or throw some error (doesn’t have time to return).
* void: for Typescript function that will return nothing.
* any: for Typescript function where you are not sure of it returns.
* "allowUnreachableCode": false, Disable error reporting for unreachable code.

*/
function logging(msq) {
    console.log(`message : ${msq}`);
    return; // undefiend
}
logging("Abdulrahman");
function fail() {
    throw "Hello World";
    // return "hi" //it not running
}
fail();
//# sourceMappingURL=void-Never.js.map