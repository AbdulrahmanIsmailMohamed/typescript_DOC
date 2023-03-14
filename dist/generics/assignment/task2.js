"use strict";
/**
    لديك مجموعة من السطور تطبع قيم في ال Console
    قم بكتابة ال Function لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات
*/
// Write Function Code Here
const showTypes = (val1, val2, val3) => {
    return `${val1 ? val1 : "Nothing"} - ${val2 ? val2 : "Nothing"} - ${val3 ? val3 : "Nothing"}`;
};
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
//# sourceMappingURL=task2.js.map