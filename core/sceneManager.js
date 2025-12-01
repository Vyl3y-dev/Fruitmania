// create a drawer for all scenes, ref which one is active
export class SceneManager {
    constructor() {
        this.scenes = {};
        this.currentScene = null;
    }

// helps know what exists
    register(name, sceneClass) {
    this.scenes[name] = new sceneClass(this); // pass this manager
}


// clean transitions, fresh starts, no leftover objects from old scenes
    changeScene(name){
        if (this.currentScene && this.currentScene.cleanup) {
            this.currentScene.cleanup();
        }

        this.currentScene = this.scenes[name];

        if (this.currentScene && this.currentScene.init) {
            this.currentScene.init();
        }
    }

// updates/draws to be added to loop
    update(dt) {
        if (this.currentScene && this.currentScene.update) {
            this.currentScene.update(dt);
        }
    }

    draw() {
    if (this.currentScene && this.currentScene.draw) {
        this.currentScene.draw();
    }
}

}