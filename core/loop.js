export class GameLoop {
    constructor(sceneManager){
        this.sceneManager = sceneManager;
        this.lastTime = 0;
        this.raf = null;
    }

    start(){
        this.lastTime = performance.now();
        this.tick();
    }

    tick() {
        const now = performance.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.sceneManager.update(dt);

        this.raf = requestAnimationFrame(() => this.tick());
    }

    stop() {
        cancelAnimationFrame(this.raf);
    }
}