import { Game } from "./game.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:[Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};
var game = new Phaser.Game(config);