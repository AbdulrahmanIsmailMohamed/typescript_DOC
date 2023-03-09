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
enum Game {
    Easy = 100,
    Medium = 80,
    Hard = 10,
    Insane = value(30)
}
function value(val: number): number {
    return val - Game.Hard
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 10
console.log(Game.Insane); // 20