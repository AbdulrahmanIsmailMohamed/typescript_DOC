"use strict";
/*
    لدينا ال Object التالي لا تقم بالتعديل عليه
    قم بإنشاء ال Interface لنطبع بيانات ال Object بنجاح
*/
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
//# sourceMappingURL=task2.js.map