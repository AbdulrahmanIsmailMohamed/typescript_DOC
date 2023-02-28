/**
 * "noImplicitAny": true, Enable error reporting for expressions and declarations with an implied 'any' type.
 * "noImplicitReturns": true, Enable error reporting for codepaths that do not explicitly return in a function.
 * "noUnusedLocals": true, Enable error reporting when local variables aren't read.
 * "noUnusedParameters": true, Raise an error when a function parameter isn't read.
*/

const showMSG: boolean = true;

function printInfo(num1: number, name: string, num2: number): string {
    // let local = "this is local variable but it not used"
    if (showMSG) {
        return `the number 1 is ${num1} and name is ${name} and num 2 is ${num2}`
    }
    return "Undefined";
}

console.log(printInfo(1, "Abdulrahman", 2));

