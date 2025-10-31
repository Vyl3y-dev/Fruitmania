export class GameObject {
    constructor() { this.active = true; }
    update() {}
    destroy() { this.active = false; }
}

//all game things inherit from this class