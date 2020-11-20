
var database;
var form,player,game;
var playerCount,gameState=0;
var allPlayers;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start()
}

function draw(){

}
