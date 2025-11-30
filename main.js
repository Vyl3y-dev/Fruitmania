import { SceneManager } from "./core/sceneManager.js";
import { GameLoop } from "./core/loop.js";

import { MenuScene } from "./scenes/menu.js";
import { GameScene } from "./scenes/game.js";

const sceneManager = new SceneManager();

// register scenes
sceneManager.register("menu", MenuScene);
sceneManager.register("game", GameScene);

// start in menu
sceneManager.changeScene("menu");

const loop = new GameLoop(sceneManager);
loop.start();
