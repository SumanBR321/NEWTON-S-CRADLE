class bob{
    constructor(x,y,r){
        var options = {
            'restitution':1.0,
            'friction':0.4,
            'density':1.2
            //isStatic = true
        }
      this.r = r;
      this.body = Bodies.circle(x,y,(this.r)/2,options);
      World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);//to update the current position of the object
    ellipse(0,0,this.r,this.r);
    pop();
}
};