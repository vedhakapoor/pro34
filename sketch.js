//Create variables here
var database;
var dogstanding,happyDog,database,foodS,foodStock,dog;

function preload()
{
  //load images here
  dogstanding = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogstanding);
  dog.scale = 0.3;
  
  foodStock = database.ref('food');
  foodStock.on("value",readstock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  text("food: " + foodS,100,100);
}


function readstock(data){
  foodS = data.val();
  console.log(foodS);
}


function writeStock(x){

  if(x <= 0){
    x = 0;
   }else{
    x = x-1;
    }
  

  database.ref('/').update({
    food: x
  })
}

