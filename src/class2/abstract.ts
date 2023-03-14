/**
* * Class
* *  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
    msg: () => string;
    constructor(public title: string) {
        this.msg = () => {
            return `the title is ${this.title}`
        }
    }
    abstract howToCook(): void
}

class Pizza extends Food {
    constructor(title: string) {
        super(title);
    }
    howToCook(): void {
        console.log("The Pizza takes 1 hour");
    }
}

let food = new Pizza("Pizza");

console.log(food.msg());
food.howToCook();