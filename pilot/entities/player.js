import { PhysicalObject } from "../core/physicalObject.js";

//inherits movement +visuals  
export class Player extends PhysicalObject {
    constructor() {
        const el = document.createElement("div"); //and makes DOM element for player 
        el.className = "player"; //+ applies CSS style
        super(el); //--> passes element to parent constructors
        this.speed = 5; //set speed
        this.setPosition(170, 300); //set position
        this.alive = true; //is alive
        this.health = 3; //has 3 hearts
    }

    setPosition(x, y) { //moves  the element
        this.x = x; this.y = y;
        this.el.style.transform = `translate(${x}px, ${y}px)`;
    }

    move(input) { //checks keys to move left and right + keeps player within boundaries
         if (!this.alive) return;
        if (input.down("ArrowLeft") && this.x > 0) this.x -= this.speed;
        if (input.down("ArrowRight") && this.x < 316) this.x += this.speed;
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    takeDamage(amount = 1) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            this.alive = false;
        console.log("💀 Player died!");
    }
}

}