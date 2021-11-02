class GameOver extends Phaser.Scene {
    
    constructor() {
        super("game-over");
        //binding context
       // console.log("gameover")
        this.ToMainMenu = this.ToMainMenu.bind(this);
     
    }
    

    preload() {
       // this.load.image("pilot", "assets/img/rocket.png");
        
    }

    create() {
    

        this.add.image(DATA.width/2, DATA.height/2,"menubackground")
        ///Selectors
        this.WinTxt = this.add.text(400,200,"felicitaciones").setInteractive()
                    .setOrigin(0.5,0.5)
        this.result = this.add.text(400,240,
            "pilot:"+DATA.lastPlay.pilotName+" score:"+DATA.lastPlay.score+" time:"+DATA.lastPlay.time)
            .setOrigin(0.5,0.5)
            
                   
        this.backbutton = this.add.text(400,300,"Volver").setInteractive()
                    .on('pointerdown', this.ToMainMenu)
                    .on('pointerover', function (event) {
                        //add a tint
                        this.setTint(0xf97306);

                    })
                    .on('pointerout', function (event) {
                        //add a tint
                        this.clearTint();

                    })
                    .setOrigin(0.5,0.5)
                    ;




    }


    update() {

    }


   
    ToMainMenu() {

       // this.scene.start("main-menu")
    }


 


}