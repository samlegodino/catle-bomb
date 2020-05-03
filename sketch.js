var tower1,tower2,tower3,tower4,tower5,tower6,tower7,tower8,tower9,tower10,tower11;

function setup() {
  createCanvas(1200,800);
  tower1=createSprite(350,400,30,120);
  tower1.shapeColor="red";
  tower2=createSprite(500,400,30,120)
  tower2.shapeColor="red"
  tower3=createSprite(430,430,140,20);
  tower3.shapeColor="red"
  tower4=createSprite(520,400,20,200);
  tower4.shapeColor="red"
  tower5=createSprite(340,400,20,200);
  tower5.shapeColor="red";
  tower6=createSprite(430,300,160,20);
  tower6.shapeColor="red";
  tower7=createSprite(430,400,140,20);
  tower7.shapeColor="red";
  tower8=createSprite(430,350,140,20);
  tower8.shapeColor="red";
  tower9=createSprite(430,500,160,20);
  tower9.shapeColor="red";
  tower10=createSprite(530,400,20,260);
  tower10.shapeColor="red";
  tower11=createSprite(330,400,20,260);
  tower11.shapeColor="red";
  drawSprites();
}