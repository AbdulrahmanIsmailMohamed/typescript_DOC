"use strict";
/**
* You have the following Function full of errors
* It is required to fix errors so that the results appear as in the comment inside the console
* You can cancel and modify the function as you like
*/
function yesOrNo(val) {
    if (typeof val === "string")
        return "Error";
    if (val > 10)
        return "True";
    else
        return "False";
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
//# sourceMappingURL=task4.js.map