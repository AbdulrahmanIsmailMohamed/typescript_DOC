"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
    }
}
let itemone = new Collection();
itemone.add({ name: "Rules", title: "this is Book", price: 123 });
console.log(itemone);
let itemTwo = new Collection();
itemTwo.add({ name: "Cooks", title: "This is Books", price: 1237 });
console.log(itemTwo);
//# sourceMappingURL=genericsAndInterface.js.map