/**
* * Type Assertions
* sometime compiler doesn't know the information we do
* TypeScript iS Not Performing Any Check To Make Sure Type Assertion is valid
*/

// const img = document.getElementById("img") as HTMLImageElement;
// console.log(img.src);

let str: any = 1000
console.log((str as string).repeat(3));
