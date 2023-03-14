/**
    لديك مجموعة من السطور تطبع قيم في ال Console
    قم بكتابة ال Class لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات
*/

// Write Class Code Here
class Gamee<T> {
    constructor(public title: T, public price: T | number) { }
    getDiscount(val: T): void {
        console.log(`The Dicount Is ${val}`);
    }
}
// Do Not Edit Here
let game1 = new Gamee<string>("Ys", 100);
let game2 = new Gamee<number>(2064, 100); // There's A Game Called "2064"

console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"

console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"