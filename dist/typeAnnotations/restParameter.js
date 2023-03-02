"use strict";
/**
* * Function Rest Parameter
* Float => it is under type number
* * to change true or false to number add "+" before it;
*/
function addAll(...nums) {
    let result = 0;
    nums.forEach(num => result += num);
    return result;
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, +true));
//# sourceMappingURL=restParameter.js.map