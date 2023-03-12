/**
* * Static Member
*/

class Users {
    private static created = 0;
    static get() {
        return this.created;
    }
    constructor(public name: string) {
        Users.created++;
    }
}

let u1 = new Users("Abdulrahman");
let u2 = new Users("Ismail");
let u3 = new Users("Mohammed");

console.log(Users.get());
