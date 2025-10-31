import { PhysicalObject } from "../core/physicalObject.js";

export class Fruit extends PhysicalObject {
    constructor(x) {
        const el = document.createElement("div");
        el.className = "fruit";
        super(el);
        this.x = x;
        this.y = 0;
        this.vy = 1 + Math.random() * 2;
    }

    update(dt){
        super.update(dt);
        if(this.y > 500) this.destroy();
    }
}

//applies fruit image --> spawn position --> random downward speed --> moves down each frame, removes when offscreen