class BootScene extends Phaser.Scene {
    constructor() {
        super("boot");
        DATA.width=800
        DATA.height=600
        
    }

    preload() {
        this.load.image('sky', 'assets/img/btile.png');
        this.load.image('rocket', 'assets/img/rocket.png');
        this.load.image('buble', 'assets/img/bubble-particle.png');

       //progress bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var progressPercent= this.add.text(260,295).setOrigin(0,0.5)
        progressBox.fillStyle(0xff00ff, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        this.load.on('progress', function (value) {
            console.log("progress:",value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
            var percent = Math.round(value*100)
            progressPercent.text=  percent + "%"
        });

        /*
        this.load.on('fileprogress', function (file) {
            console.log(file.src);//file load
        });*/
        
        this.load.on('complete', function () {
            console.log('complete');
        });



}




    create() {


        
        
    }

    update() {
        this.scene.start("main-menu")

    }

}