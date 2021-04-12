var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog1Image = loadImage("images/dogImg.png")
  dog2Image = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dog1Image)
  dog.scale = 0.25
  
  firebase.database().ref('Food')
  database = firebase.database()
 
  foodStock = database.ref('Food')
   foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2Image)

  }
  fill("black")
  textSize(30)
  text (foodS, 50,50)
  text("Note: Press UP_ARROW key to feed The Dog Food")


}

function readStock(data){
foodS = data.val()

}

function writeStock(x){
  


  
  database.ref('/').update({
    Food:x = x+1
  })
}



