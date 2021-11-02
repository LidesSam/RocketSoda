// import { MainMenu } from "./mainMenu.js";
// import { Game } from "./game/game.js";

// import { PilotSelection } from "./pilotSelectionScene.js";

var audioContext;
try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.error(e);
}

let gravity=100
let gameConfig = {
    
    type: Phaser.AUTO,
    width: 800,
    height: 576,
    background:0x000000,
    parent:"canvasGame",
    
    scene:[BootScene,MainMenu,Game,GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: gravity }
        }
    },
    audio: {
        disableWebAudio: true,
        context: audioContext
    },
    scale:{
        parent:"gamediv"
    }
    , render: {
        antialias: true
    },
    useTicker:true//enagle time step and delta time
};

var game = new Phaser.Game(gameConfig);
DATA.width=800
DATA.height=576
