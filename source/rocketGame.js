var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update:update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //path of images
    
    //this.load.setBaseURL('http://labs.phaser.io');
  

    this.load.image('sky', 'assets/img/rocket.png');
    this.load.image('rocket', 'assets/img/rocket.png');
    this.load.image('red', 'assets/img/rocket.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var rocket = this.physics.add.image(400, 100, 'rocket');

    rocket.setVelocity(0 ,0);
    rocket.setBounce(1, 0.5);
    rocket.setCollideWorldBounds(true);

    emitter.startFollow(rocket);
}

function update(){

    
}