function showMsg(user?: (number | string), age?: (number | boolean | string), country?: (boolean | string)) {
    return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));