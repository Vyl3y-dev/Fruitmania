import { RenderableObject } from "./renderableObject.js";

export class PhysicalObject extends RenderableObject {
    constructor(el) {
        super(el);
        this.x = 0; this.y = 0;
        this.vx = 0; this.vy = 0;
    }
    physics(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update(dt) {
        this.physics(dt);
    }
}

//inherits from renderableObject
//adds movement and position logic --> moves using CSS trnasform ---> every frame updates physics