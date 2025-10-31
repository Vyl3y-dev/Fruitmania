import { GameManager } from "./core/gameManager.js";
import { Player } from "./entities/player.js";
import { Fruit } from "./entities/fruit.js";
import { Eggplant } from "./entities/eggplant.js";
import { isColliding } from "./utils/collision.js";


//finds the game div in HTML and makes a GameManager obj for it
const gameRoot = document.getElementById("game");
const game = new GameManager(gameRoot);

//creates and adds player to the game
const player = new Player();
game.add(player);

//randomly adds fruits and eggplants to the game
setInterval(() => {
  const x = Math.random() * 370;
  if (Math.random() < 0.8) {
    game.add(new Fruit(x));
  } else {
    game.add(new Eggplant(x));
  }
}, 1000);

//loop it up!
function loop() {
  player.move(game.input);
  for (const obj of game.objects) {
    if (obj !== player && isColliding(player, obj)) {
      if (obj instanceof Fruit) {
        game.score += 100;
        game.hud.updateScore(game.score);
      } else if (obj instanceof Eggplant) {
        player.takeDamage();
        if (!player.alive) {
          alert(`💀 Game Over!\nHI-SCORE: ${game.score}\nClick OK to restart.`);
          location.reload();
          return;
        }
      }
      obj.destroy();
    }
  }
  game.update(1);
  requestAnimationFrame(loop);
}

loop();