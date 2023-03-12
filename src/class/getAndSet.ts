/**
* * Get And Set Accessors
*/

class Money {
    msg: () => string;
    constructor(private _account: number, public name: string) {
        this.msg = () => {
            return `The Name is ${this.name} and account is ${this._account}`;
        }
    }
    public get account(): number {
        return this._account;
    }
    public set account(value: number) {
        this._account = value;
    }
}

let money = new Money(12345, "abdulrahman");

console.log(money.msg());
money.account = 202020;
console.log(money.account);
console.log(money.msg());