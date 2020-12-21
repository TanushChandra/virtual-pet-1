//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog_img1, dog_img2;
function preload()
{
  //load images here
  dog_img1.loadImage("dogImg.png");
  dog_img2.loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage("dog",dog_img1);
  database = firebase.database();
  foodStock=database.ref('Food');
 foodStock.on("value",readStock); 
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_AROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
 //funcion to read values from database
 function readStock(data){
   foodS=data.val();
 }
 // function to write values in database
 database.ref('/').update({
   Food:x
 })


  }
  drawSprites();
  //add styles here
textSize(20);
Fill()
stroke()
text("Note: Press UP_ARROW to feed milk");
}



