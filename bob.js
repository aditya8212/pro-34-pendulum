class BOB{
constructor(x){
   var options={
    isStatic:false,
    density:0.5
      
   }

this.body = Bodies.circle(x,400,30,options);
this.radius = 30;
World.add(world,this.body);

}

display(){
var sa = this.body.position

push();
strokeWeight(2);
stroke("white");
fill("black");
ellipseMode(RADIUS);
ellipse(sa.x,sa.y,this.radius,this.radius);
pop();

}




}