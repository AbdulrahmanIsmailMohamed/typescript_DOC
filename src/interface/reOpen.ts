/**
* * Interface Re-Open And Use Cases
*/

// example: home page
interface Setting {
    theme: boolean;
    readonly color: string;
}

interface Setting {
    sidebar: boolean;
}

let userSetting: Setting = {
    theme: true,
    color: "red",
    sidebar: false
}

userSetting.theme = false
// userSetting.color = "green"