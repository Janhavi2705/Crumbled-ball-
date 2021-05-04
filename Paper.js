class Paper{
      constructor(x,y,radius,options){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2  
      }
     this.body = Matter.Bodies.circle(x,y,50,50,radius,options);
     this.width = 50;
     this.height = 50; 
     World.add(world, this.body);
}
display(){
      //var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("purple");
      circle(0, 0,50,50,50);
      pop();
    }
  };