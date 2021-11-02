class DATA {


   //move to a diferent class

    static saveLastPlay(_score=0, _time=0){
        DATA.save("lpScore",_score)
        DATA.save("lpTime",_time)
    }

    static saveLastPlayAuto(){
        DATA.save("lpScore",DATA.lastPlay.score)
        DATA.save("lpTime",DATA.lastPlay.time)
    }

    static loadLastPlay(){
        let loadedScore =DATA.load("lpScore")
        let loadedTime =DATA.load("lpTime")
     //   console.log("load score:"+loadedScore)
        if(loadedScore==null || loadedTime==null){
            console.log("no previous data")
        }else{

            DATA.lastPlay={
                pilotName:"ny",
                time:loadedScore,
                score:loadedTime
            }
        }
    }

   
}
//if the source is a movilet
DATA.isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);


//move to a diferent class
DATA.save = (key,value) => {
  
    //    window.parent.storeSet(key,value)
  
        localStorage.setItem(key,value)
    //}
    console.log("saved: ", key, value)
}
DATA.load = (key) => {
    let value = null
   
        //value = window.parent.storeGet(key)
        value= localStorage.getItem(key)
  
   console.log("loaded: ", key, value)
    return  value
}

DATA.Backgrounds={
    main:null,
    game:null
}

DATA.color=0

DATA.width = 0;
DATA.height = 0;