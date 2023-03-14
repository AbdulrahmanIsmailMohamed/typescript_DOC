"use strict";
/**
* * Class
* *  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/
class Food {
    constructor(title) {
        this.title = title;
        this.msg = () => {
            return `the title is ${this.title}`;
        };
    }
}
class Pizza extends Food {
    constructor(title) {
        super(title);
    }
    howToCook() {
        console.log("The Pizza takes 1 hour");
    }
}
let food = new Pizza("Pizza");
console.log(food.msg());
food.howToCook();
//# sourceMappingURL=abstract.js.map