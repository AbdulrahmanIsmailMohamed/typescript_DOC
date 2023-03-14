/**
* * Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

const returnTypeOfVal = <T>(val: T) => typeof val;

console.log(returnTypeOfVal(100));
console.log(returnTypeOfVal("Abdulrahman"));
console.log(returnTypeOfVal(true));

const returnMulti = <T, S>(val1: T, val2: S): string => `the Type Of Value1 is ${typeof val1} and value2 is ${typeof val2}`;

console.log(returnMulti("Abdulrahman", 21));
