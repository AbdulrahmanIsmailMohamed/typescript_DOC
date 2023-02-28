/**
* * Function Optional and Default Parameters
* in js every parameter is optional => Undefiend if you didn't use it;
* "?" optional parameter;
*/

function showData(name: string, age: number, year?: number): string {
    return `name is ${name} and age is ${age} and year is ${year}`;
}

console.log(showData("Abdulrahman", 21,2001));
