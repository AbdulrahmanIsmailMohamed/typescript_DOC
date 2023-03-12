"use strict";
/**
* * Static Member
*/
class Users {
    static get() {
        return this.created;
    }
    constructor(name) {
        this.name = name;
        Users.created++;
    }
}
Users.created = 0;
let u1 = new Users("Abdulrahman");
let u2 = new Users("Ismail");
let u3 = new Users("Mohammed");
console.log(Users.get());
//# sourceMappingURL=staticMember.js.map