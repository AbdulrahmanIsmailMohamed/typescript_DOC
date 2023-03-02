/**
* * Type Alias Advanced
*/
type Buttons = {
    up: string,
    down: string,
    left: string,
    right: string
};

type last = Buttons & {
    x: string
}

// function getAction(btns: Buttons) {
//     console.log(`Action For Button Up is ${btns.up}`);
//     console.log(`Action For Button Down is ${btns.down}`);
//     console.log(`Action For Button Right is ${btns.right}`);
//     console.log(`Action For Button Left is ${btns.left}`);
// }

function getAction(btns: last) {
    console.log(`Action For Button Up is ${btns.up}`);
    console.log(`Action For Button Down is ${btns.down}`);
    console.log(`Action For Button Right is ${btns.right}`);
    console.log(`Action For Button Left is ${btns.left}`);
    console.log(`Action For Button X is ${btns.x}`);
}

getAction({ up: "Jump", down: "Go Down", right: "Go Right", left: "Go Left", x: "Exist" });