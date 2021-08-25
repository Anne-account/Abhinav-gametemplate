function level2() {
    console.log("level 2");

    bg.addAnimation("level 2", bg2);
    bg.changeAnimation("level 2", bg2);
    bg.scale = 1.7;

    if (bg.y > 355) {
        bg.y = 250
    }

    spawnrunFast();
    spawnlion();
    spawneagle();
    spawnpanther();
    spawnheal();

    if (score < 0) {
        gameState = 4;
    }

    if (lionGroup.isTouching(dyso)) {
        lionGroup.destroyEach();
        score = score - 10;
    }

    if (healGroup.isTouching(dyso)) {
        healGroup.destroyEach();
        score = score + 10;
    }

    if (fastRunGroup.isTouching(dyso)) {
        fastRunGroup.destroyEach();
        // background moves faster to make it look like dyso is moving faste
        bg.velocityY = 3
        setTimeout(function () { bg.velocityY = 1; }, 3000);
    }

    if (eagleGroup.isTouching(dyso)) {
        eagleGroup.destroyEach();
        // dyso will lose a life
        heartGroup[heartGroup.length-1].destroy()
        if(heartGroup.length == 0){
            gameState=4;
        }
    }

    if (pantherGroup.isTouching(dyso)) {
        pantherGroup.destroyEach();
        // add the code what should happen when dyso touches panther
        
    }

    gorillaGroup.destroyEach();
    rhinocerosGroup.destroyEach();
    crocodileGroup.destroyEach();

    if (score >= 20) {
        score = 0;
        dyso.x = 534;
        dyso.y = 559;
        gameState = 3;
    }
}

function spawneagle() {
    if (frameCount % 500 === 0) {
        eagle = createSprite(Math.round(random(10, 700)), 0, 20, 20);
        eagle.velocityY = 1;
        eagle.addImage("Eagle", eagleimg);
        eagle.scale = 0.4;
        eagle.lifetime = 600;
        eagleGroup.add(eagle);
    }
}

function spawnlion() {
    if (frameCount % 750 === 0) {
        lion = createSprite(Math.round(random(10, 700)), 0, 20, 20);
        lion.velocityY = 1;
        lion.addImage("Lion", lionimg);
        lion.scale = 1;
        lion.lifetime = 600;
        lionGroup.add(lion);
    }
}

function spawnpanther() {
    if (frameCount % 1350 === 0) {
        panther = createSprite(Math.round(random(10, 700)), 0, 20, 20);
        panther.velocityY = 1;
        panther.addImage("Panther", pantherimg);
        panther.scale = 0.7;
        panther.lifetime = 600;
        pantherGroup.add(panther)
    }
}

function spawnrunFast() {
    if (frameCount % 1000 === 0) {
        fastrun = createSprite(Math.round(random(10, 700)), 0, 20, 20);
        fastrun.velocityY = 1;
        fastrun.addImage("Run", fastrunimg);
        fastrun.lifetime = 1200;
        fastrun.scale = 0.3
        fastRunGroup.add(fastrun)
    }
}

function spawnheal() {
    if (frameCount % 100 === 0) {
        heal = createSprite(Math.round(random(10, 700)), 0, 20, 20);
        heal.velocityY = 1
        heal.addImage("Heal", healimg);
        heal.lifetime = 2700;
        heal.scale = 0.1;
        healGroup.add(heal);
    }
}
