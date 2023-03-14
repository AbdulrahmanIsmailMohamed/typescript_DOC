"use strict";
/**
* * Genrics With Class
*/
// class DMS<T>{
//     constructor(public title: T) { };
//     message(val: T): void {
//         console.log(val);
//     }
// }
class DMS {
    constructor(title) {
        this.title = title;
    }
    ;
    message(val) {
        console.log(val);
    }
}
// let dms = new DMS("Abdulraman");
// dms.message("Hello")
let dms = new DMS("Abdulraman");
dms.message(100);
//# sourceMappingURL=class.js.map