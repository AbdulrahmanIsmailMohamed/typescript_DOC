"use strict";
/**
    لديك Abstract Class و Two Classes فيهم بعض المشاكل تحتاج للتعديل عليهم يتختفي الأخطاء
    ممنوع إستخدام ال override Keyword
*/
class Games {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Games {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Games {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
// End Edit And Fix
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
//# sourceMappingURL=task1.js.map