class Player{
    constructor(){
        this.name = null;
        this.distance = 0
        this.index = null;
        this.rank = null;
    }
    getCount(){
        var playerCountref=database.ref("playerCount");
        playerCountref.on("value",function(data){
            playerCount=data.val();
        })
    }
    getCarsAtEnd(){
        var carsAtEndref=database.ref("carsAtEnd");
        carsAtEndref.on("value",(data)=>{
            this.rank=data.val();
        })
    }
    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerindex = "players/player" + this.index;
        
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val()
        })
    }
}