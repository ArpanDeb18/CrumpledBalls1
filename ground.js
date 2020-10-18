class Ground{
    
    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h , {isStatic:true}); 
        World.add(world, this.body);
    
    }

    display(){

        fill(255, 255, 0);
        strokeWeight(0);
        rect(this.x, this.y, this.w, this.h);
    }

}