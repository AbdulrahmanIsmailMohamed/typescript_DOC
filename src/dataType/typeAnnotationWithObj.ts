/**
* * Type Annotation With Object
*/

let data: {
    username: string,
    id?: number,
    readonly hire: boolean
} = {
    username: "Abdulrahman",
    // id: 1,
    hire: true
}

data.username = "mohamed";
data.id = 2;
// data.hire = false;

console.log(data);