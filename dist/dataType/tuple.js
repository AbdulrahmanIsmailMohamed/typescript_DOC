"use strict";
/**
* * Tuple Data Type
* is Another sort of Array types
* we knows exactly how many Elements it contains
* we knows which types it contains at specific positions
*/
let article = [10, "Post one", true];
article = [1, "post one", false];
// article.push("Abdo") // without readonly it will running
console.log(article);
// destraction
const [id, post, published] = article;
console.log(id);
console.log(post);
console.log(published);
//# sourceMappingURL=tuple.js.map