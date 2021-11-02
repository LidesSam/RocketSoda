//class that act like a "hit the bell carnival game"
// note::: separate it as a minigame
class Pusher extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        var x = 0
        var y = 0
        super(scene,600,400,"rocket")
      
        //energy
        this.energy=0;
        this.max_energy=100;//maximun energy 
        this.lost_factor =10;//used to decrease the energy of the pusher



        var pushBox = scene.add.graphics(); 
        pushBox.fillStyle(0x000055, 1);
        pushBox.fillRect(this.x-32, this.y+16-320-32, 64,320+32);

        this.pushBar = scene.add.graphics();
        //create bell and hammer
        this.hammer= scene.add.image(600,540,"buble")
        this.bell= scene.add.text(600,540,"buble").setOrigin(0.5,0.5)
        
        //positionate of
        //bell
        this.bell.x= this.x
        this.bell.y= this.y-320
     
        
        //hammer
        this.hammer.x= this.x
        this.hammer.y= this.y-this.energy*320/100
        
        //bind of functions
        this.pushed = this.pushed.bind(this)
        this.isFull = this.isFull.bind(this)
        
    }


    create() {
       
        
         
    }
    //dt is in miliseconds
    update(timestep, dt) {
        this.pushBar.clear()
        //lost of energy===>
        this.energy-=this.lost_factor*dt/1000

        //correction of energy ever >=0
        if(this.energy<=0){
            this.energy=0
        }
        //lost of energy===>
        
        let efactor=this.energy*320/100

        //update position of hammer in function of energy
        this.hammer.x=this.x
        this.hammer.y= this.y-efactor

        this.pushBar.fillStyle(0x990099, 0.8);
        this.pushBar.fillRect(this.x-24, this.y-efactor,48,efactor);
    }

    //function to add energy
    pushed(){
        console.log("push push!!! Energy!!")
        this.energy+=10
    }


    //check if reach max energty
    isFull(){
        if(this.energy>this.max_energy){
            this.energy-=this.max_energy
    
            return true
        }
        return false
    }
 
}