"use strict";
/**
* *  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
let users = {
    id: 1,
    username: "Abdulrahman",
    age: 21
};
console.log(users);
function getData(data) {
    return `
    id = ${data.id}, username = ${data.username} and age = ${data.age}
    `;
}
console.log(getData({ id: 2, username: "Mohammed", age: 20 }));
//# sourceMappingURL=declaration.js.map