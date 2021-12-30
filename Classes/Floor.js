class Floor{
    constructor(x,y,width,height){
              
        var options= {
            isStatic: true,
            density: 10,
            friction: 10
        }    

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,options);
        World.add(world,this.body);
    }

    show(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

    paint(C){
        fill(C);
    }

}