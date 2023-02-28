let num1: number = 10;
let num2: number = 20;
let myInfo: any;

myInfo=10;
myInfo="10";
console.log(myInfo);


function sum(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sum(num1, num2));
console.log(typeof sum(num1, num2));
