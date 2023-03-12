"use strict";
/*
    لدينا Interface بإسم Member يمكنك التعديل عليه كما تريد
    قم بالتعديل على ال Interface لتنتهي رسائل الخطأ الموجودة في ال Object بالأسفل
    ممنوع التعديل عى ال Object ولا السطور الموجودة تحته
    لديك 4 أخطاء كل واحد فيه التعليق الذي يعبر عنه
*/
// Do Not Edit The Code Below
let user1 = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user1.id = 200;
user1.id = "200"; // Type 'string' is not assignable to type 'number'
user1.state = false; // Cannot assign to 'state' because it is a read-only property
//# sourceMappingURL=task1.js.map