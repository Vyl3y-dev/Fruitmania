import { Input } from "./input.js";
import { HUD } from "../ui/hud.js";

export class GameManager {
    constructor(root) { //takes the main DOM container
        this.root = root; //keeps ref to game area
        this.objects = []; //holds entities
        this.input = new Input(); //creates keyboard listener event
        this.score = 0; //initializes score tracker then creates div to show it


        this.hud = new HUD(this.root);
        this.hud.updateScore(this.score);
    }

    //adds new game obj to list and immediately appends it to the DOM
    add(obj) {
        this.objects.push(obj);
        obj.render(this.root);

        if (obj.constructor.name === "Player") {
            this.player = obj;
            this.hud.updateHearts(this.player.health);
        }
    }

    //calls update on "live" objs, removes dead objs, updates score
    update(dt) {
        this.objects.forEach(o => o.active && o.update(dt));
        this.objects = this.objects.filter(o => o.active);

        this.hud.updateScore(this.score);
        if (this.player) {
            this.hud.updateHearts(this.player.health);
        }
        
    }



    //heartbeat of the game runs once per frame and updates all objs, schedules next heartbeat on next frame
    loop() {
        
        this.update(1);
        requestAnimationFrame(() => this.loop());
    }
}

