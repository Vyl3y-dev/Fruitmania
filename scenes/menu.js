export class MenuScene {

    constructor(manager) {
        this.manager = manager;
    }

    init() {
        this.root = document.getElementById("game");
        this.root.innerHTML = `
            <div class="menu">
                <div class="menu-title"><img src="../assets/canvasItems/FruitmaniaTITLE.png" alt=""/></div>
                <button id="startButton" class="all-buttons">Start</button>
                <button id="howtoButton" class="all-buttons">How to Play</button>
                <button id="hiscoresButton" class="all-buttons">Hi-Scores</button>
                <button id="creditsButton" class="all-buttons">Credits</button>
            </div>
        `;

        const btn = document.getElementById("startButton");

        this.clickHandler = () => {
            this.manager.changeScene("game");

        };

        btn.addEventListener("click", this.clickHandler);

    }

    update(dt) { /* menu doesn’t need updates */ }

    cleanup() {
        const btn = document.getElementById("startButton");
        btn?.removeEventListener("click", this.clickHandler);

    }
}
