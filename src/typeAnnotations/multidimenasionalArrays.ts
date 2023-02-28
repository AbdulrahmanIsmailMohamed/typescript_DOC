let num: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Abdulrahman", "Ismail", "Mohammed"];

let arr: (number | string | (number | boolean[])[] | boolean)[] = [
  1,
  2,
  3,
  "Abdo",
  "Ahmed",
  [1, 2, 3, [true, false]],
  true,
  false,
];

const numArr: (string | number | boolean | (number | boolean[])[])[] =
  arr.slice(0, 3);
console.log(numArr);

const strArr: (string | number | boolean | (number | boolean[])[])[] =
  arr.slice(3, 5);
console.log(strArr);
