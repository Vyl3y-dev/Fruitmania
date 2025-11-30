export class GameScene {
    init() {
        this.root = document.getElementById("game");
        this.root.innerHTML = `
            <div id="gameplay" class="gameplay-area"></div>
            <div id="oni"></div>
            <div id="peach"></div>
        `;

        // later: movement, spawning, collision, etc.
    }

    update(dt) {
        // later: move fruit, player, etc.
    }

    cleanup() {
        // scene gets removed automatically when innerHTML changes
    }
}
