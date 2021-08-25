var dyso,king;
var gorilla,rhino,crocodile,Fly,Attack,bear,snake,panther,eagle,wolf,lion;
var sceptre,scoreHeart,food,fastrun,shield,heal;
var bg2,bg3;
var bg,bgimg,dysoimg,gorillaimg,rhinocerosimg,crocodileimg,attackimg,sceptreimg,scoreheartimg,kingimg;
var foodimg,bearimg,snakeimg,pantherimg,eagleimg,wolfimg,lionimg,fastrunimg,shieldimg,healimg;
var homescreen,homescreenImg;
var gameState=0,healGroup;
var gorillaGroup,rhinocerosGroup,crocodileGroup,foodGroup,heartGroup,lionGroup,eagleGroup,pantherGroup;
var wolfGroup,snakeGroup,bearGroup,fastRunGroup;
var edges;
var score=0;

function  preload() {
    bgimg=loadAnimation("images/bg.jpg");
    bg2=loadAnimation("images/second background.jpg");
    bg3=loadAnimation("images/third background.jpg");
    dysoimg=loadImage("images/Clear dyso.png");
    gorillaimg=loadImage("images/Clear gorilla.png"); 
    rhinocerosimg=loadImage("images/Clear rhino.png");
    crocodileimg=loadImage("images/Clear crocodile.png");
    bearimg=loadImage("images/Clear bear.png");
    snakeimg=loadImage("images/Clear snake.png");
    pantherimg=loadImage("images/Clear panther.png");
    eagleimg=loadImage("images/Clear eagle.png");
    wolfimg=loadImage("images/Clear wolf.png");
    lionimg=loadImage("images/Lion.png");
    foodimg=loadImage("images/Tiger food.png");
    attackimg=loadImage("images/Attack.png");
    flyimg=loadImage("images/Wings.png");
    fastrunimg=loadImage("images/Fast run.png");
    shieldimg=loadImage("images/Immunity perk.png");
    healimg=loadImage("images/heal perk.png");
    sceptreimg=loadImage("images/The Sceptre.png");
    scoreheartimg=loadImage("images/Score Heart.png");
    kingimg=loadImage("images/Evil king.png");
    homescreenImg=loadImage("images/Home page img.jpg"); 
}

function setup(){
    createCanvas(1000,600);

    bg=createSprite(500,250);
    bg.addAnimation("background",bgimg);
    bg.scale=0.3;
    bg.visible=false;
    bg.velocityY=1;

    dyso=createSprite(534,559,20,20);
    dyso.addImage("Dyso",dysoimg);
    dyso.scale=0.7;
    dyso.setCollider("rectangle",0,0,60,200);
    dyso.visible=false;
    dyso.debug=false;

    gorillaGroup= new Group();
    rhinocerosGroup=new Group();
    crocodileGroup=new Group();
    lionGroup=new Group();
    eagleGroup=new Group();
    pantherGroup=new Group();
    wolfGroup=new Group();
    snakeGroup=new Group();
    bearGroup=new Group();
    foodGroup=new Group();
    heartGroup=new Group();
    healGroup=new Group();
    fastRunGroup=new Group();

    for(var i=1;i<=4;i++){
    scoreHeart=createSprite((20+i+15)*i,21,10,10);
    scoreHeart.addImage("Lives",scoreheartimg);
    scoreHeart.scale=0.21;
    heartGroup.add(scoreHeart);
    }
    // hearts are created using a loop  I want to destroy one by one how to do that? I have added all of them to a group.. Okay.. Cou
  //  console.log(heartGroup);
   
    button1 = createButton('Start');
    button1.position(474,369);
    button1.style('background', 'yellow'); 

    homescreen=createSprite(500,300,displayWidth,displayHeight);
    homescreen.addImage("home screen",homescreenImg);
    homescreen.scale=1.2;

    button1.mousePressed(()=>{
        button1.hide();
        gameState=1;
        homescreen.visible=false;
        bg.visible=true;
        dyso.visible=true
    })
}

function draw(){   
    background(0);

    if(gameState===1){
        level1();   
    }

    if(gameState===2){
        level2();
    }
    
    if(gameState===3){
        level3();
    }
    
    if(keyDown("LEFT_ARROW")){
        dyso.x-=2;
       }
    if (keyDown("RIGHT_ARROW")){
        dyso.x+=2;
       }
    if (keyDown("UP_ARROW")){
        dyso.y-=2;
       }
    if (keyDown("DOWN_ARROW")){
        dyso.y+=2;
       } 

    edges= createEdgeSprites();
    dyso.bounceOff(edges);
  
    drawSprites();
    
    if(gameState===0){
    textSize(20);
    strokeWeight(3)
    stroke("black");
    fill("white");
    text("The tiger is running toward something he has been chasing for his entire life. An ancient relic that"+"\n" + 
    " his ancestors had left him ages ago. If he finds it he will regain his rightful place on the throne of "+"\n" + 
    " the jungle as the sceptre is the only thing that can defeat the evil King Diabolos, who has taken over"+"\n" +
    " his throne,but your path wont be easy.King Diabolos has commanded many evil generals in his "+"\n" + 
    "army of animals to stop you. There will be many-gorillas,rhinos and crocodiles and traps set by"+"\n" + 
    " hunters. But he is not the only one who has help,the friendly Macao monkeys, ancient friends"+"\n" + 
    " of your family have laid down many valuable things to help on your way to the Golden Cave,"+"\n" + 
    "the place where the sceptre is gaurded by King Diabolos.Find the sceptre and reclaim your throne.",80,60);
    }

    if(gameState!==0){
   textSize(20);
   strokeWeight(3)
   stroke("black");
   fill("red");
   text("SCORE: "+score,858,32);
    }

    if (gameState===4){
    textSize(40);
    strokeWeight(3)
    stroke("black");
    fill("black");
    background(255);
    text("GAME OVER ",500,300);
    }
}