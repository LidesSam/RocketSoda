class Game extends Phaser.Scene {
    constructor() {
        super("game");
        DATA.width = 800
        DATA.height = 600

    }


    create() {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('buble');

        this.emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        this.add.text(DATA.width/2,100,"Press Space").setOrigin(0.5,0.5)

        this.rocket = this.physics.add.image(400, 100, 'rocket');

        this.rocket.setVelocity(0, 200);
        this.rocket.setBounce(1, 0.5);
        this.rocket.setCollideWorldBounds(true);
        
        this.emitter.startFollow(this.rocket);
        this.pusher= new Pusher(this) 
        this.arrows =this.input.keyboard.createCursorKeys()
        this.actionBtn= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)



    }

    update(timestep, dt) {

        this.pusher.update(timestep, dt)
        if (this.pusher.isFull()){
            this.rocket.setVelocity(0,-200)
            this.emitter.start()
        }

        if(Phaser.Input.Keyboard.JustDown(this.actionBtn)){
            this.pusher.pushed()
        }

        if(Math.abs(this.rocket.body.velocity.y)<=10){
            this.emitter.stop()
        }

    }
}