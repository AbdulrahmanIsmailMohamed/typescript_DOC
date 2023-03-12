"use strict";
/**
* * Interface Implement
*/
class Userss {
    constructor(theme, username) {
        this.theme = theme;
        this.username = username;
    }
    done() {
        console.log("Done");
    }
    ;
}
let use = new Userss("black", "Abdulrahman");
console.log(use.theme);
use.done();
//# sourceMappingURL=interface.js.map