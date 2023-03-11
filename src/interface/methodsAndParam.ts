/**
* * Interface Method And Parameters
*/

interface MyInfo {
    name: string,
    phone: string,
    zipCode: number,
    address: string,
    country: string,
    telephone: string,
    birthYear: number,
    age: (val: number) => number
}

let myInfos: MyInfo = {
    name:"Abdulrahman",
    address:"zagazig",
    phone:"0156456",
    zipCode:101556,
    country:"Egypt",
    telephone:"8656454",
    birthYear:2001,
    
}
