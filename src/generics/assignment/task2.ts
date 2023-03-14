/**
    لديك مجموعة من السطور تطبع قيم في ال Console
    قم بكتابة ال Function لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات
*/

// Write Function Code Here
const showTypes = <A = void, B = void, C = void>(val1?: A, val2?: B, val3?: C): string => {
    return `${val1 ? val1 : "Nothing"} - ${val2 ? val2 : "Nothing"} - ${val3 ? val3 : "Nothing"}`
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true