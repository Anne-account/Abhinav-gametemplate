function level3(){

    console.log("level 3");

    bg.addAnimation("level 3",bg3); 
    bg.changeAnimation("level 3",bg3); 
    bg.scale=1.7;
    
    if(bg.y>355){
        bg.y=250
    }

spawnwolf();
spawnsnake();
spawnbear();
spawnshield();
spawnattack();

if(score<0){
    gameState=4;
}

// give coniditons what should happen to dyso if it tocuhes objects of level 3

lionGroup.destroyEach();
eagleGroup.destroyEach();
pantherGroup.destroyEach();

}

// Create groups for the all the objects created below

function spawnwolf(){
    if(frameCount%100===0){
    wolf=createSprite(Math.round(random(10,700)),0,20,20);
    wolf.velocityY=1;
    wolf.addImage("Wolf",wolfimg);
    wolf.scale=0.3;
    }
}

function spawnsnake(){
    if(frameCount%230===0){
    snake=createSprite(Math.round(random(10,700)),0,20,20);
    snake.velocityY=1;
    snake.addImage("Snake",snakeimg);
    snake.scale=0.3;
    }
}

function spawnbear(){
    if(frameCount%350===0){
    bear=createSprite(Math.round(random(10,700)),0,20,20);
    bear.velocityY=1;
    bear.addImage("Bear",bearimg);
    bear.scale=0.3;
    }
}


function spawnshield(){
    if(frameCount%500===0){
    shield=createSprite(Math.round(random(10,700)),0,20,20);
    shield.velocityY=1;
    shield.addImage("Immune",shieldimg);
    shield.lifetime=4200;
    shield.scale=0.1;
    }
}


function spawnattack(){
    if(frameCount===5700){
    Attack=createSprite(Math.round(random(10,700)),0,20,20);
    Attack.velocityY=1;
    Attack.addImage("Attack",attackimg);
    Attack.lifetime=5700;
    Attack.scale=0.1;
    }
}