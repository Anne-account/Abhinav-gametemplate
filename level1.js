function level1(){

    console.log("level 1");

    if(bg.y>355){
        bg.y=250
    }

    spawngorilla();
    spawnrhinoceros();
    spawncrocodile();
    spawnfood();
    
    if(score<0){
        gameState=4;
    }

       if(gorillaGroup.isTouching(dyso)){
        gorillaGroup.destroyEach();
         dyso.x=534;
         dyso.y=559;
          }
    
        if(crocodileGroup.isTouching(dyso)){
            crocodileGroup.destroyEach();
             // dyso will lose a life
            heartGroup[heartGroup.length-1].destroy()
            if(heartGroup.length == 0){
                gameState=4;
            }
        }

        if(rhinocerosGroup.isTouching(dyso)){
            rhinocerosGroup.destroyEach();
            score=score-1;
        }
        if(foodGroup.isTouching(dyso)){
            score=score+4
            foodGroup.destroyEach();
        }
   
     if(score>=4){
        score=0;
        dyso.x=534;
        dyso.y=559;
        gameState=2;
    }
}

function spawngorilla(){
    if(frameCount%350===0){
     gorilla=createSprite(Math.round(random(10,700)),0,20,20);
     gorilla.velocityY=1;
     gorilla.addImage("Gorilla",gorillaimg);
     gorilla.scale=0.5;
     gorilla.lifetime=500;
     gorillaGroup.add(gorilla);
    } 
 }
 
 function spawnrhinoceros(){
     if(frameCount%500===0){
     rhinoceros=createSprite(Math.round(random(10,700)),0,20,20);
     rhinoceros.velocityY=1;
     rhinoceros.addImage("Rhinoceros",rhinocerosimg);
     rhinoceros.scale=0.5;
     rhinoceros.lifetime=500;
     rhinocerosGroup.add(rhinoceros);     
     }
 } 
 
 function spawncrocodile(){
     if(frameCount%670===0){
      crocodile=createSprite(Math.round(random(10,700)),0,20,20);
      crocodile.velocityY=1;
      crocodile.addImage("Crocodile",crocodileimg);
      crocodile.scale=0.3;
      crocodile.lifetime=500;    
      crocodileGroup.add(crocodile);
     } 
  }

  function spawnfood(){
    if(frameCount%800===0){
     food=createSprite(Math.round(random(10,700)),0,20,20);
     food.velocityY=1;
     food.addImage("Food",foodimg);
     food.scale=0.3;
     food.lifetime=600;  
     foodGroup.add(food);
    } 
 }

