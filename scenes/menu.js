export class MenuScene {
    init() {
        this.root = document.getElementById("game");
        this.root.innerHTML = `
            <div class="menu">
                <div class="menu-title"><img src="../assets/canvasItems/FruitmaniaTITLE.png" alt=""/></div>
                <div class=""></div>
            </div>
        `;

        this.keyHandler = (e) => {
            if (e.code === "Space") {
                window.sceneManager.changeScene("game");
            }
        };
        document.addEventListener("keydown", this.keyHandler);
    }

    update(dt) { /* menu doesn’t need updates */ }

    cleanup() {
        document.removeEventListener("keydown", this.keyHandler);
    }
}
