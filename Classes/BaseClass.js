class BaseClass{
    constructor(x,y,width,height){
        
        var options= {
            restitution: 0.5,
            frictionAir: 0.05,
            density: 5,
            friction: 1
        }    

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,options);
        World.add(world,this.body);
    }

    show(){
        
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();

        //console.log("verde");
    }
}