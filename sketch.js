var backGround,backGroundImg;
var elsa, elsaImg;
var anna,annaImg,annasGroup;
var money,moneyImg,moneysGroup;
var restart,restartImg;
var annacollect = 0;


var PLAY=1;
var END=0;
var gameState=1;


function preload(){
backGroundImg = loadImage("backgroun.png");
  elsaImg = loadImage("elsa.png");
  annaImg = loadImage("anna.png");
  moneyImg = loadImage("money.png");
  restartImg = loadImage("gameOver.png");
 music= loadSound("house_party.mp3");
  
  
}

function setup() {
 createCanvas(600,600);
  music.loop(); 
  backGround = createSprite(300,300);
backGround.addImage("backGround",backGroundImg);
  backGround.velocityY = 1;
  
  elsa = createSprite(300,450,50,50);
  elsa.scale = 0.2;
 elsa.addImage("elsa", elsaImg);

  annasGroup = new Group ();
  moneysGroup = new Group();
  
  
  
  
  restart = createSprite(300,300);
  restart.addImage(restartImg);
  

  restart.scale = 1
  
  
  
  }


function draw() {
 background(0);
  
   if(gameState===PLAY){
     
     elsa.x = World.mouseX;
      
  
     
     
     edges= createEdgeSprites();
  elsa.collide(edges);
  
  if(backGround.y > 400){
      backGround.y = 300
    }
     
      
  createanna();
  createmoney();
     
  
  
  
  if (annasGroup.isTouching(elsa)) {
      annasGroup.destroyEach();
    annacollect = annacollect+50;
      
    }
  
     restart.visible=false;
   
   }
  
  if(moneysGroup.isTouching(elsa)) {
        gameState=END;
    
  backGround.velocityY = 0;
    annasGroup.destroyEach();
        moneysGroup.destroyEach();
    elsa.destroy();
    
     restart.visible=true;
    
     
    
    
   annasGroup.setVelocityYEach(0);
        moneysGroup.setVelocityYEach(0);
  }
    
  drawSprites();
  
  stroke(20);
   textSize(50);
  fill("yellow");
  text("ANNA: "+ annacollect,200,50);
}

function createanna(){
  if (World.frameCount %100== 0) {
  var anna = createSprite(Math.round(random(50, 380)));
  anna.addImage(annaImg);
  anna.scale=0.3;
  anna.velocityY = 5;
  anna.lifetime = 300;
  annasGroup.add(anna);
  }
}
function createmoney(){
   if (World.frameCount % 50== 0) {
  var money = createSprite(Math.round(random(50, 200)));
  money.addImage(moneyImg);
  money.scale=0.04;
 money.velocityY = 7;
  money.lifetime = 300;
  moneysGroup.add(money);
  }
}

