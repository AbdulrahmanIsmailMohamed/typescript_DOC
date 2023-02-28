"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach(num => result += num);
    return result;
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, +true));
//# sourceMappingURL=restParameter.js.map