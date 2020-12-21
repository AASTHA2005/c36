var gamestate=0;
var playercount;
var database;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,track,ground;
function preload(){ 
track=loadImage("sprites/track.jpg")
car1img=loadImage("sprites/car1.png")
car2img=loadImage("sprites/car2.png")
car3img=loadImage("sprites/car3.png")
car4img=loadImage("sprites/car4.png")
ground=loadImage("sprites/ground.png")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game=new Game()
    game.getstate()
    game.start();
}

function draw(){
    background("white");
    if(playercount===4)
    {
        game.update(1)

        }
    if(gamestate===1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.end();
    }
   // drawSprites()
    }
      
    
    



   
