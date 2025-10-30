// === 🧱 Skeleton (base) ===
class GameObject {
  constructor() { this.active = true; }
  update() {}
  destroy() { this.active = false; }
}

class RenderableObject extends GameObject {
  constructor(el) { super(); this.el = el; }
  render(parent) {
    if (!this.el.parentNode) parent.appendChild(this.el);
  }
  destroy() {
    if (this.el.parentNode) this.el.remove();
    super.destroy();
  }
}

class PhysicalObject extends RenderableObject {
  constructor(el) {
    super(el);
    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
  }
  physics(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
  update(dt) { this.physics(dt); }
}

// === 🧠 Brain: Manager ===
class GameManager {
  constructor(root) {
    this.root = root;
    this.objects = [];
    this.input = new Input();
    this.score = 0;

    this.scoreEl = document.createElement("div");
    this.scoreEl.id = "score";
    root.appendChild(this.scoreEl);
  }

  add(obj) {
    this.objects.push(obj);
    obj.render(this.root);
  }

  update(dt) {
    this.objects.forEach(o => o.active && o.update(dt));
    this.objects = this.objects.filter(o => o.active);
    this.scoreEl.textContent = `Score: ${this.score}`;
  }

  loop() {
    this.update(1);
    requestAnimationFrame(() => this.loop());
  }
}

// === 💓 Heart: Input System ===
class Input {
  constructor() {
    this.keys = {};
    document.addEventListener("keydown", e => this.keys[e.key] = true);
    document.addEventListener("keyup", e => this.keys[e.key] = false);
  }
  down(key) { return !!this.keys[key]; }
}

// === 💪 Muscles: Entities ===
class Player extends PhysicalObject {
  constructor() {
    const el = document.createElement("div");
    el.className = "player";
    super(el);
    this.speed = 5;
    this.setPosition(170, 450);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.el.style.transform = `translate(${x}px, ${y}px)`;
  }

  move(input) {
    if (input.down("ArrowLeft") && this.x > 0) this.x -= this.speed;
    if (input.down("ArrowRight") && this.x < 340) this.x += this.speed;
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

class Fruit extends PhysicalObject {
  constructor(x) {
    const el = document.createElement("div");
    el.className = "fruit";
    super(el);
    this.x = x;
    this.y = 0;
    this.vy = 2 + Math.random() * 2;
  }

  update(dt) {
    super.update(dt);
    if (this.y > 500) this.destroy();
  }
}

class Bomb extends PhysicalObject {
  constructor(x) {
    const el = document.createElement("div");
    el.className = "bomb";
    super(el);
    this.x = x;
    this.y = 0;
    this.vy = 3 + Math.random() * 2;
  }

  update(dt) {
    super.update(dt);
    if (this.y > 500) this.destroy();
  }
}

// === 🧬 Utility: Collision ===
function isColliding(a, b) {
  const r1 = a.el.getBoundingClientRect();
  const r2 = b.el.getBoundingClientRect();
  return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

// === 🕹️ Bringing it all together ===
const gameRoot = document.getElementById("game");
const game = new GameManager(gameRoot);

const player = new Player();
game.add(player);

// spawn fruits & bombs
setInterval(() => {
  const x = Math.random() * 370;
  if (Math.random() < 0.8) {
    game.add(new Fruit(x));
  } else {
    game.add(new Bomb(x));
  }
}, 1000);

// Game Loop
function loop() {
  player.move(game.input);
  for (const obj of game.objects) {
    if (obj !== player && isColliding(player, obj)) {
      if (obj instanceof Fruit) {
        game.score += 1;
      } else if (obj instanceof Bomb) {
        game.score -= 2;
      }
      obj.destroy();
    }
  }
  game.update(1);
  requestAnimationFrame(loop);
}

loop();
