function preload(){
 carImage=loadImage("Toyota-Fortuner.png")
 roadImage=loadImage("road.jpg")
 coinImage=loadImage("coin.png")
 coinImage2=loadImage("coin2.png")
 diamonds=loadImage("diamonds.png")
}

function setup() {
 createCanvas(600,200)
 road=createSprite(300,-10,600,200)
 road.addImage(roadImage)
 road.velocityX=-5
 road.scale=1.7
 car=createSprite(90,100)
 car.addImage(carImage)
 car.scale=0.3
coinGroup=new Group()
 score=0
}

function draw() {
 background("white")
 drawSprites()
 if(road.x<100){
    road.x=road.width/2
 
 }
 if(keyDown("up")){
    car.y-=5

 }
 if(keyDown("down")){
    car.y+=5

 } 
 createCoin()
 if(car.isTouching(coinGroup)){
   coinGroup.destroyEach()
   score=score+1
 }
 textSize(20)
 fill ("red")
 text("score "+score,450,50)
}
function createCoin(){
    if(frameCount%60===0){
        coin=createSprite(600,random(5,195))
        coin.velocityX=-5
        rand=Math.round(random(1,3))
        switch(rand){
         case 1 :coin.addImage(coinImage);
         break ;
         case 2 : coin.addImage(coinImage2);
         break;
         case 3 : coin.addImage(diamonds)
        }
        coin.scale=0.1
        coin.lifetime=120
        coinGroup.add(coin)
    }
}