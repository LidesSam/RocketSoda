class MainMenu extends Phaser.Scene {
    constructor() {
        super("main-menu");
        //binding context
        this.startGame = this.startGame.bind(this);
        console.log("main menu")

    }


    create() {
        this.titleTxt = this.add.text(DATA.width / 2, DATA.height / 4, "SODA ROCKET")
            .setOrigin(0.5, 0.5)

        this.startTxt = this.add.text(DATA.width / 2, DATA.height / 2, "PLAY")
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', this.startGame)
            .on('pointerover', function (event) {
                //add a tint

            })
            .on('pointerout', function (event) {
                //add a tint


            })









    }

    update() {

    }



    startGame() {
        this.scene.start("game")
    }

}