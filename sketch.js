var boy1, boy2;
var skyImg, sky;
var plane1Img, plane2Img;
var box = Math.random(1,8)
var box2 = Math.random(1,6)
var a =0
var score1 = 0
var score2 = 0

gameState="Play"

function preload(){
  skyImg = loadImage("sky_2.jpg")
  plane1Img = loadImage("plane_1.png")
  plane2Img = loadImage("plane_2.png")
  boy1Img = loadImage("boy_1.png")
  boy2Img = loadImage("boy_2.png")
  crashImg = loadImage("crash.png")

}


function setup(){
  canvas = createCanvas(1500,800)
  boy1 = createSprite(1400,700,50,100)
  boy2 = createSprite(100,700,50,100)
  boy1.addImage(boy1Img)
  boy1.scale = 0.3
  boy2.addImage(boy2Img)
  boy2.scale = 0.5
  plane1 = createSprite(1200,Math.round(random(300,550)),80,30)
  plane1.addImage(plane1Img)
  plane1.scale = 0.2
  plane2 = createSprite(300,Math.round(random(200,350)),80,30)
  plane2.addImage(plane2Img)
  plane2.scale = 0.3
  leftWall = createSprite(0,400,10,800)
  leftWall.shapeColor="black"
  rightWall = createSprite(1500,400,10,800)
  rightWall.shapeColor="red"

  
}

function draw(){
  background(skyImg)
  if(gameState==="Play"){
    
    if(keyIsDown(LEFT_ARROW)){
      plane1.velocityX = -(Math.round(random(7,10)))
      score1=plane1.velocityX*(-1)
      
     }
     if(keyIsDown(RIGHT_ARROW)){
      plane2.velocityX = Math.round(random(7,10))
      score2=plane2.velocityX
     }
     
      
      
      console.log(score1)
      
     
     
      
      
      console.log(score2)
      
     
     if(frameCount%5===0&&plane1.velocityX<=-6){
     // console.log("yes")
      score1+=1
      
    }
    if(frameCount%5===0&&plane2.velocityX>=6){
      // console.log("yes")
       score2+=1
       
     }
      if(plane2.isTouching(rightWall)){
        
      a = 1
      gameState="End"
      }
      if(plane1.isTouching(leftWall)){
        
      a = 2
      gameState="End"
      }
      
      if(plane1.isTouching(plane2)){
        gameState="End"
      }

  }

  
  if(gameState==="End"){
    plane1.velocityX = 0 
        plane2.velocityX = 0 
        
        if(plane1.isTouching(plane2)){
        image(crashImg,plane2.x+20,plane1.y-100,200,200)
       
        
        
      }
      if(keyDown("r")){
        gameStat="Play"
        score1=0
        score2=0
        location.reload()
      }
    }
  
  

 


  


  drawSprites()
  if(a===1){
    textSize(30)
    fill("black")
    text("I won", 100, 500)
    gameState="End"
  }
  if(a===2){
    textSize(30)
    fill("black")
    text("I won",1400 ,500)
    gameState="End"
  }
  
  
  
 textSize(30)
 fill("black")
 text("Player 1 score "+score1,50,50)
 text("Player 2 score "+score2,50,100)

 if(gameState==="End"){
 
      
      fill("black")
      if(plane1.isTouching(plane2)){
      text("Crashed",plane2.x+20,plane2.y+70)
      }
      text("press r to restart the game",700,250)
      
      
    }
  
}

