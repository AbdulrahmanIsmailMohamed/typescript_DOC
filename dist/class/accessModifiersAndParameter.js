"use strict";
/**
* * Class
* * - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/
class Cars {
    constructor(name, color, model, year) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.year = year;
        this.msg = () => {
            return `The car name is ${this.name} and color is ${this.color} and model is ${this.model} and the year is ${this.year}`;
        };
    }
}
let car = new Cars("BMW", "Red", "No3", 2001);
// car.year  is private
console.log(car.name);
console.log(car.msg());
//# sourceMappingURL=accessModifiersAndParameter.js.map