const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var  world,engine;
var ground1;
var divisionHeight=300;
 var  divisions= [];
 var  plinkos= [];
 var balls = [];
 var gameState="start";
 var count = 0;
 var score =0;
 var particle;

function setup() {
  var canvas = createCanvas(700,800);
  engine = Engine.create();
 world = engine.world; 

 
ground1 = new Ground(240,780,900,20);

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375));
   
 }

 
    }

function draw() {
  background(5,0,0);  
  

  Engine.run(engine);


  textSize(30);
  text("500",20,500)
  text("500",100,500)
  text("500",180,500)
  text("200",250,500)
  text("200",340,500)
  text("200",410,500)
  text("100",480,500)
  text("100",570,500)

  text("100",650,500)
  text("score : "+score,40,100);
  
  if(gameState == "end") {
    textSize(50);
    text("Game Over!", 200, 300);
  }
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

   if(particle!=null)
   {
    particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  mousePressed();

}

function mousePressed(){
  if(gameState!=="end"){
   count++;
    particle=new Particle(mouseX,10,10,10);

  }
}

