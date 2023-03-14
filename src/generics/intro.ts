/**
* * Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnNumber(val: number): number {
    return val
}
function returnString(val: string): string {
    return val
}
function returnBoolean(val: boolean): boolean {
    return val
}

console.log(returnNumber(100));
console.log(returnString("Abdulrahman"));
console.log(returnBoolean(true));


function returnValue<Generics>(val: Generics): Generics {
    return val
}

console.log(returnValue(100));
console.log(returnValue("Abdulrahman"));
console.log(returnValue(true));