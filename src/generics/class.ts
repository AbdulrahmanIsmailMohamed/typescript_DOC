/**
* * Genrics With Class
*/

// class DMS<T>{
//     constructor(public title: T) { };
//     message(val: T): void {
//         console.log(val);
//     }
// }
class DMS<T = string>{
    constructor(public title: T) { };
    message(val: T): void {
        console.log(val);
    }
}

// let dms = new DMS("Abdulraman");
// dms.message("Hello")

let dms = new DMS<string | number>("Abdulraman");
dms.message(100)