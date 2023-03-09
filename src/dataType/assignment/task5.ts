/**
* You have the following Function full of errors
* It is required to fix errors so that the results appear as in the comment inside the console
* You can cancel and modify the Function as you like, except for canceling the word custom
*/

type custom = "Yes" | "No" | "Error";

function isHeOld(age: any): custom {
    if (typeof age === "string") return "Error";
    if (age > 40) return "Yes";
    else return "No"
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"