/**
* * Extending Interfaces
*/

interface Name {
    name: string;
}

interface Age extends Name {
    age: number;
}

interface Infos extends Age, Name {
    phone: string;
}

let information: Infos = {
    name: "Abdulrahman",
    age: 21,
    phone: "016456456455"
}