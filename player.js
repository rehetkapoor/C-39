class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){
        var pc_ref=database.ref('playerCount');
        pc_ref.on("value", (data)=>{
            playerCount=data.val();
        })
    }

    updateCount(c){
        database.ref('/').update({
            playerCount: c
        });
    }
    
    update(){
        var playerIndex="players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    static getPlayerInfo(){
        var pI_ref=database.ref('players');
        pI_ref.on("value", (data)=>{
            allPlayers=data.val();
        });
    }
}