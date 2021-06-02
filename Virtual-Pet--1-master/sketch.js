//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage;
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);
  dog=createSprite(250,110);
  dog.addImage(dogImage)
  dog.scale=0.3;
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
 }
  drawSprites();
  //add styles here

}

function readStock(data){
    foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
