export class Input {
    constructor() {
        this.keys = {};
        document.addEventListener("keydown", e => this.keys[e.key] = true);
        document.addEventListener("keyup", e => this.keys[e.key] = false);
    }
    down(key) {
        return !!this.keys[key];
    }
}

//key event listener, for player input
//makes key logic simpler to implement