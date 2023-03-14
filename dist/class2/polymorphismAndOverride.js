"use strict";
/**
* * Class
* * - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/
class Foods {
    constructor(title, discription) {
        this.title = title;
        this.discription = discription;
        this.msg = () => {
            console.log(`the title is ${this.title} and discription is ${this.discription}`);
        };
    }
    attack() {
        console.log("Attacking Now!!");
    }
}
class Fish extends Foods {
    constructor(title, description) {
        super(title, description);
        super.msg;
    }
    ;
    attack() {
        super.attack();
        console.log("This Is Class Fish!!");
    }
}
const fish = new Fish("food", "cook the fish");
fish.msg();
fish.attack();
//# sourceMappingURL=polymorphismAndOverride.js.map