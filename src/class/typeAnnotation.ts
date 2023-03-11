/**
* * Type Annotations With Class
*/

class User {
    name: string;
    age: number;
    address: string;
    msg: () => string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.msg = () => {
            return `My Name is ${this.name}, age is ${this.age} and my address is ${this.address}`;
        }
    }
    msg1() {
        return `My Name is ${this.name}, age is ${this.age} and my address is ${this.address}`;
    }
}


let myClass = new User("Abdulrahman", 21, "ZAGAZIG");

console.log(myClass.age);
console.log(myClass.msg());
console.log(myClass.msg1());