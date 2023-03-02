/**
* * Literal Types
*/

type nums = 1 | 0 | -1

function comapare(num1: number, num2: number): nums {
    if (num1 === num2) return 0;
    if (num1 > num2) return 1;
    else return -1;
}

console.log(comapare(1, 2)); // -1
console.log(comapare(2, 1)); // 1
console.log(comapare(1, 1)); // 0