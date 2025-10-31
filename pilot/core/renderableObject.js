import { GameObject } from "./gameObject.js";

export class RenderableObject extends GameObject {
    constructor(el) { super(); this.el = el; }
    render(parent){
        if (!this.el.parentNode) parent.appendChild(this.el);
    }
    destroy() {
        if (this.el.parentNode) this.el.remove();
        super.destroy();
    }
}

//inherits from GameObject, adds visual "renderable" properties
//takes DOM element to represent itself visually --> calls parent constructor --> stores element
//if it isn't in the DOM, add it to the parent
//removes its elements from DOM before making inactive

