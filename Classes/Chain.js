class Chain{
    constructor(bodyA,pointB){
        var options= {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 1            
        }

        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);   
        
        this.image1 = loadImage("Images/sling1.png");
        this.image2 = loadImage("Images/sling2.png");
        this.image3 = loadImage("Images/sling3.png");
    }

    show(){
        
        if(this.chain.bodyA){
            push();
            strokeWeight(5);
            stroke("#54270F");
            if(this.chain.bodyA.position.x < this.chain.pointB.x){
                line(this.chain.bodyA.position.x-10,this.chain.bodyA.position.y,this.chain.pointB.x-20,this.chain.pointB.y+25);
                line(this.chain.bodyA.position.x-10,this.chain.bodyA.position.y,this.chain.pointB.x+25,this.chain.pointB.y+25);
                image(this.image3,this.chain.bodyA.position.x-25,this.chain.bodyA.position.y,15,25);
            }
            else if(this.chain.bodyA.position.x > this.chain.pointB.x){
                line(this.chain.bodyA.position.x+10,this.chain.bodyA.position.y,this.chain.pointB.x-20,this.chain.pointB.y+25);
                line(this.chain.bodyA.position.x+10,this.chain.bodyA.position.y,this.chain.pointB.x+25,this.chain.pointB.y+25);
                image(this.image3,this.chain.bodyA.position.x+25,this.chain.bodyA.position.y,15,25);
            }
            else if(this.chain.bodyA.position.x = this.chain.pointB.x){
                line(this.chain.bodyA.position.x-10,this.chain.bodyA.position.y,this.chain.pointB.x-20,this.chain.pointB.y+25);
                line(this.chain.bodyA.position.x-10,this.chain.bodyA.position.y,this.chain.pointB.x+25,this.chain.pointB.y+25);
                image(this.image3,this.chain.bodyA.position.x-25,this.chain.bodyA.position.y,15,25);
            }
            
            

        }
        else{
            image(this.image3,this.chain.pointB.x,this.chain.pointB.y+15,15,25);   
            line(this.chain.pointB.x-20,this.chain.pointB.y+25,this.chain.pointB.x+25,this.chain.pointB.y+25);
            pop();
        }
        
        image(this.image1,200,100);
        image(this.image2,172,91);
        
    }

    release(){
        this.chain.bodyA = null;
    }

}