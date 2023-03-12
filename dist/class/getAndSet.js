"use strict";
/**
* * Get And Set Accessors
*/
class Money {
    constructor(_account, name) {
        this._account = _account;
        this.name = name;
        this.msg = () => {
            return `The Name is ${this.name} and account is ${this._account}`;
        };
    }
    get account() {
        return this._account;
    }
    set account(value) {
        this._account = value;
    }
}
let money = new Money(12345, "abdulrahman");
console.log(money.msg());
money.account = 202020;
console.log(money.account);
console.log(money.msg());
//# sourceMappingURL=getAndSet.js.map