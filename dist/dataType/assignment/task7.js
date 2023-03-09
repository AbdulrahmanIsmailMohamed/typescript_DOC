"use strict";
/**
* We have a game that contains 4 levels Easy, Medium, Hard, Insane
* We want to create Enums that contain the levels and their value
* The Easy is number 100
* The value of Medium is an arithmetic operation, which is the value of Easy minus the number 20
* The Hard is an arithmetic operation, which is the value of the Medium subtracted from it (the value of the Easy divided by 2)
* The Insane is a Function that accepts one parameter from you, which is a number
* The Function subtracts this number from the value of the Hard
* View the values ​​to get the job done
*/
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 10] = "Hard";
    Game[Game["Insane"] = value(30)] = "Insane";
})(Game || (Game = {}));
function value(val) {
    return val - Game.Hard;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 10
console.log(Game.Insane); // 20
//# sourceMappingURL=task7.js.map