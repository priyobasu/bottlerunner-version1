var bottle1,bottlerun,background1,background2,invisible,bin1,bin2,bin3,bin4,bottledie;
 var blueGroup,binGroup,gameState="play"
function preload() {
bottlerun=loadAnimation("bottle1.png","bottle2.png")
bottledie=loadAnimation("bottle3.png")
background1=loadImage("background.png") 
bin1=loadImage("bin 1.png")
bin2=loadImage("bin2.png")
bin3=loadImage("bin3.png")
bin4=loadImage("bin4.png")
}
function setup() {
  createCanvas(1200,400);
  background2=createSprite(400,350,20,20)
  background2.addImage(background1)
  background2.scale=1.3
bottle1=createSprite(75,275,20,20)
bottle1.addAnimation("running",bottlerun)
bottle1.addAnimation("die",bottledie)



 bottle1.scale=0.050
 background2.velocityX=-4
 invisible=createSprite(400,350,1000,20)
 invisible.visible=false
 blueGroup=new Group()
 binGroup=new Group()
}

function draw() {
  background("yellow");
  console.log(gameState)
  if(gameState==="play"){
    if(background2.x<0){
      background2.x=600
  
    }  
  
    if(keyDown(32)){
      bottle1.velocityY=-20
    }
    bottle1.velocityY = bottle1.velocityY + 0.8
    var rand = Math.round(random(1,2));
    if(rand===1){
  
    
    spawnbluebins()
    }
    else if(rand===2){
      spawnbins()
    }
   if(bottle1.isTouching(binGroup)){
gameState="end"
   }
  if(bottle1.isTouching(blueGroup)){
    bottle1.velocityY=0
  }
  
  }
  if(gameState==="end"){
background2.velocityX=0
bottle1.changeAnimation("die",bottledie)
binGroup.destroyEach()
blueGroup.destroyEach()
  }
 
  bottle1.collide(invisible)
 
  drawSprites();
}
function spawnbins(){
  if (frameCount % 100 === 0){
    var bin = createSprite(1200,250,10,40);
    bin.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: bin.addImage(bin1);
               break;
       case 2: bin.addImage(bin4);
               break;
       case 3: bin.addImage(bin3);
               break;
    
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     bin.scale = 0.8;
     bin.lifetime = 200;
    binGroup.add(bin)
    //add each obstacle to the group
     //obstaclesGroup.add(obstacle);
  }
 
}
function spawnbluebins(){
  if (frameCount % 100 === 0){
    var binb = createSprite(1200,250,10,40);
    binb.addImage(bin2)
    binb.velocityX = -6;
    
     //generate random obstacles
   
     
    
     //assign scale and lifetime to the obstacle           
   binb.scale = 0.8;
     binb.lifetime = 200;
     blueGroup.add(binb)
    }
   
    //add each obstacle to the group
     //obstaclesGroup.add(obstacle);
  }
 


