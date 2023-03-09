"use strict";
/**
* Use what you learned to show results as in the comments
* Destructuring the results to appear below as in the comments
*/
let posts;
posts = [100, 200, "Title"]; // Error
posts = ["Title", 100, true]; // Error
posts = [100, "Title", true]; // Good
posts.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
let [id, title, state] = posts;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
//# sourceMappingURL=task6.js.map