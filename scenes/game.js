export class GameScene {
    init() {
        this.root = document.getElementById("game");
        this.root.innerHTML = `
            <div id="gameplay" class="">
            <div id="gameplayBG"></div>
            <div id="vyley" class="character"></div>
            <div id="bluebrick" class="platform"></div>
            <div id="oni" class="character"></div>
            <div id="redbrick" class="platform"></div>
            </div>
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
