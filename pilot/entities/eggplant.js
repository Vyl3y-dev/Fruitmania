import { PhysicalObject } from "../core/physicalObject.js";

export class Eggplant extends PhysicalObject {
    constructor(x) {
        const el = document.createElement("div");
        el.className = "eggplant";
        super(el);
        this.x = x;
        this.y = 0;
        this.vy = 2 + Math.random() * 2;
    }

    update(dt) {
        super.update(dt);
        if (this.y > 500) this.destroy();
    }
}