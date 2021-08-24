//Create variables here
var dog, happyDog,dogIMG, happyDogIMG, database, food, foodStock

function preload()
{
  dogIMG= loadImage("dogImg.png")
  happyDogIMG= loadImage("dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  dog= createSprite (200,200,50,30);
  dog.addImage(dogIMG);
  happyDog= createSprite (200,300,50,30);
  happyDog.addImage(happyDogIMG);

  foodStock=database.red('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)

  if(keyDown(UP_ARROW)){
    writeStock(foods);
    dog .addImage(happyDogIMG);
  }


  drawSprites();

  textSize(24);
  fill("red");
  stroke("black");
  //add styles here

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  database.ref('/').update({
    
  })
}




