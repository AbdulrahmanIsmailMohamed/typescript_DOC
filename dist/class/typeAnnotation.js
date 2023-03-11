"use strict";
/**
* * Type Annotations With Class
*/
class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.msg = () => {
            return `My Name is ${this.name}, age is ${this.age} and my address is ${this.address}`;
        };
    }
    msg1() {
        return `My Name is ${this.name}, age is ${this.age} and my address is ${this.address}`;
    }
}
let myClass = new User("Abdulrahman", 21, "ZAGAZIG");
console.log(myClass.age);
console.log(myClass.msg());
console.log(myClass.msg1());
//# sourceMappingURL=typeAnnotation.js.map