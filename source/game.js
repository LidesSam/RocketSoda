export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "game" });
    }

    preload() {
        //path of images

        //this.load.setBaseURL('http://labs.phaser.io');
        alert("preload")

        this.load.image('sky', 'assets/img/btile.png');
        this.load.image('rocket', 'assets/img/rocket.png');
        this.load.image('red', 'assets/img/bubble-particle.png');
    }


    create() {
        this.arrowPad = this.input.keyboard.createCursorKeys();
        alert("create")
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        this.bubbles = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        this.rocket = this.physics.add.image(400, 100, 'rocket');

        this.rocket.setVelocity(0, 0);
        this.rocket.setBounce(1, 0.5);
        this.rocket.setDragX(0.2)
        this.rocket.setCollideWorldBounds(true);

        this.bubbles.startFollow(this.rocket,0,32);
        
        this.bubbles.stop()

    }
   
    update(){
      
        
        //control of x direction/velcity
        //need be replace to a method th
      
        if(!this.arrowPad.right.isDown && !this.arrowPad.left.isDown){
            this.rocket.setVelocityX(0)
        }else{


            if(Phaser.Input.Keyboard.JustDown(this.arrowPad.right)){
                
                this.rocket.setVelocityX(100)
            }

            if(Phaser.Input.Keyboard.JustDown(this.arrowPad.left)){
                
                this.rocket.setVelocityX(-100)
            }
        }

        if(this.arrowPad.up.isDown){
            
            this.rocket.setVelocityY(-100)
            this.bubbles.start()
           
        }else{
            this.bubbles.stop()
        }

        

        

    }

}
