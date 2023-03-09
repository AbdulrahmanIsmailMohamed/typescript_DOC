/**
* Use what you learned to make this code correct without modifying it
* You can write whatever you want before the code
* You must make an Extend of the Type and do not re-use the properties again
*/

type Info = {
    theName: string,
    theAge: number
}
type Full = Info & {
    country: string
}

// Do Not Edit Here
function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));