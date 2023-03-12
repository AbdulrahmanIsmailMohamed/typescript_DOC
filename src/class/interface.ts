/**
* * Interface Implement
*/

interface Settings {
    theme: string,
    font?: boolean,
    done: () => void
}

class Userss implements Settings {
    constructor(public theme: string, public username: string) {

    }
    done(): void {
        console.log("Done");
    };
}

let use = new Userss("black", "Abdulrahman");

console.log(use.theme);

use.done()
