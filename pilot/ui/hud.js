
export class HUD {
  constructor(root) {
    this.container = document.createElement("div");
    this.container.id = "hud";
    root.appendChild(this.container);

    this.scoreDisplay = document.createElement("div");
    this.scoreDisplay.id = "scoreboard";
    this.container.appendChild(this.scoreDisplay);

    this.hearts = document.createElement("div");
    this.hearts.id = "hearts";
    this.container.appendChild(this.hearts);
  }

  updateScore(value) {
    this.scoreDisplay.textContent = `Score: ${value}`;
  }

  updateHearts(value) {
    this.hearts.innerHTML = "";
    for (let i = 0; i < value; i++) {
      const img = document.createElement("img");
      img.src = "../assets/Health.png";
      img.classList.add("heart");
      this.hearts.appendChild(img);
    }
  }
}
