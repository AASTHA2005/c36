class Game{
    constructor(){

    }
    getstate(){
        var gamestateref =database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
        
    }
    async start(){
        if(gamestate===0){
            player=new Player();
            var playerCountRef=await database.ref('playercount').once("value");
            if(playerCountRef.exists())
            {
                playercount=playerCountRef.val();
            
              player.getcount();}
            form=new Form();

form.display();
        
        }
        car1=createSprite(100,200)
        car1.addImage(car1img)
        car2=createSprite(300,200)
        car2.addImage(car2img)
        car3=createSprite(500,200)
        car3.addImage(car3img)
        car4=createSprite(700,200)
        car4.addImage(car4img)
        cars=[car1.car2,car3,car4]
    }
    play(){
        form.hide();
        text("gamestart",120,100);
        Player.getplayerinfo();
        if(allPlayers!==undefined){
            background("#c68767")
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
           // var position=130;
           var index=0
           var x=175
           var y;
            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x
                cars[index-1].y=y

                if(index===player.index){

                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
            
                
               // text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,position)
            }
            }
            if(keyDown(UP_ARROW)){
                player.distance=player.distance+50;
                player.update();
            }
            if(player.distance>3860){
                gamestate=2
            }
            drawSprites();
            
        }
        end(){
            console.log("gameend")
        }
}